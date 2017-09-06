import Bind from '../helpers/Bind.js';
import Audio from '../services/Audio.js';
import Parse from '../services/Parse.js';
import Notification from '../models/Notification';
import NotificationView from '../views/Notification';
import Download from '../models/Download.js';
import DownloadView from '../views/Download.js';
import App from '../views/App';
import Youtube from '../models/Youtube';
import YoutubeView from '../views/Youtube';
import SearchVideos from '../services/SearchVideos';
import Modal from '../views/Modal';
import SearchModel from '../models/SearchVideos';
import SearchView from '../views/SearchVideos';
import WaitForDownload from '../views/WaitForDownload';
import Loader from '../views/Loader';

export default class RequestController {
    /**
     * Retorna uma instancia da classe
     */
    constructor()
    {
        // Input com a url
        this._inputUrl = document.querySelector('input[name=url]');

        this._audio = new Audio();
        this._parse = new Parse();
        this._searchVideos = new SearchVideos();
        this._loader = new Loader();

        this._searchModel = new Bind(
            new SearchModel(),
            new SearchView('#js-search-videos'),
            'content'
        );

        // Adiciona um proxy na classe Youtube para atualizar a YoutubeView
        this._youtube = new Bind(
            new Youtube(),
            new YoutubeView('#js-youtube'),
            'id'
        );

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notificationSuccess = new Bind(
                new Notification('success'),
                new NotificationView('#js-message'),
                'text'
        );

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notificationDanger = new Bind(
                new Notification('danger'),
                new NotificationView('#js-message'),
                'text'
        );

        // Adiciona um proxy na classe download para atualizar a DownloadView
        // quando o metodo text for chamado
        this._download = new Bind(
                new Download(),
                new DownloadView('#js-actions'),
                'fileName'
        );
    }

    /**
     * Faz o request para download do audio
     */
    request(id = null) {

        const result = id === null ? this._inputUrl.value : Youtube.generateUrl(id);

        let isUrl = Youtube.isUrl(result);

        this._resetInput();
        Modal.close();

        if (isUrl) {
            return this.youtubeVideo(result);
        }

        YoutubeView.remove();
        WaitForDownload.hide();

        this._searchVideos.request(result)
            .then(request => request.getResponse(response => {
                this._loader.stop();
                UIkit.scroll('body').scrollTo('#js-search-videos');
                this._searchModel.content = response;
            }));
    }

    /**
     *  Faz o request para download do audio
     */
    youtubeVideo(inputUrl) {
        App.hide();
        SearchView.remove();

        UIkit.scroll('body').scrollTo('#top');

        this._youtube.id = inputUrl;

        this._parse.request(inputUrl)
            .then(request => request.getResponse(response => {
                    if ( !response) throw new Error('Ooops... A url inserida não é válida.');

                    this._youtube.title = response.title;

                    return this._audio.request(response.id);
                })
            )
            .then(request => request.getResponse(response => {
                if ( !response) throw new Error('Ocorreu um erro ao fazer o download. Por favor, contate o desenvolvedor.');

                this._download.title = this._youtube.title;

                this._download.fileName = response;

                this._handleSuccessMsg();
            }))
            .catch(error => this._handleErrorsMsg(error.message));
    }

    /**
     * Resolve os erros recebidos pela promise lancando uma modal com o texto
     * Automaticamente atualiza o DOM
     *
     * @param {String} msg
     */
    _handleErrorsMsg(msg) {
        YoutubeView.hide();
        WaitForDownload.hide();
        App.toggle();
        this._notificationDanger.text = msg;
    }

    /**
     * Seta a notificacao com a mensagem de sucesso
     * Automaticamente atualiza o DOM
     */
    _handleSuccessMsg() {
        this._notificationSuccess.text = 'Seu download está pronto...';
    }

    /**
     * Limpa o campo de busca
     */
    _resetInput() {
        this._inputUrl.value = '';
    }
}
