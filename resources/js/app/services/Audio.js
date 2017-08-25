import HttpService from './HttpService.js';
import Youtube from '../models/Youtube.js';
import Loader from '../views/Loader.js';
import Url from '../helpers/Url.js';
import Bind from '../helpers/Bind.js';
import Modal from '../views/Modal.js';
import DownloadView from '../views/DownloadView.js';
import Download from '../views/Download.js';
import Notification from '../views/Notification';
import NotificationView from '../views/NotificationView';
import WaitForDownload from '../views/WaitForDownload.js';

export default class Audio {

    /**
     * Retorna uma instancia da classe Audio
     * Essa classe faz o request do video e do audio
     */
    constructor() {

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notification = new Bind(
                new Notification(),
                new NotificationView('#js-message'),
                'text'
        );

        // Adiciona um proxy na classe download para atualizar a DownloadView
        // quando o metodo text for chamado
        this._download = new Bind(
                new Download(),
                new DownloadView('#js-actions'),
                'text'
        );


        this._http    = new HttpService();
        this._loader  = new Loader();
        this._youtube = new Youtube();
        this._wait    = new WaitForDownload('#js-actions');
    }

    /**
     * Faz a requisicao pelo video e pelo audio
     *
     * @param {String} url
     * @return {Promise}
     */
    requestAudio(url) {

        return new Promise((resolve, reject) => {
            let requestParse = this._youtube.requestVideo(url);

            requestParse.then(response => {
                this._loader.stop()

                let attributes = response.reduce((finalArray, array) => finalArray.concat(array), [])

                this._youtube.update(...attributes);

                this._wait.render();

                this._download.path = this._youtube.title;
                this._download.title = attributes[0];

                let urlAudio = Url.convert('/app/Controllers/Api/Audio.php',
                        `title=${this._youtube.title}`,
                        `id=${this._youtube.id}`);
                resolve(this._http.get(urlAudio));
            })
            .catch(err => {
                this._loader.stop();
                this._handleMsg('danger', 'Ooops... Ocorreu um erro.');
                reject(err);
            });
        });

    }

    /**
     * Chama a funcao para setar o tipo e o texto da notificacao
     * Automaticamente atualiza o DOM
     *
     * @param {String} type - success, danger, info, warning
     * @param {String} text
     */
    _handleMsg(type, text) {
        this._notification.type = type;
        this._notification.text = text;
    }
}
