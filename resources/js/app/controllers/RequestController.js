import Bind from '../helpers/Bind.js';
import Audio from '../services/Audio.js';
import Notification from '../views/Notification';
import NotificationView from '../views/NotificationView';
import Download from '../views/Download.js';
import DownloadView from '../views/DownloadView.js';

export default class RequestController {
    /**
     * Retorna uma instancia da classe
     */
    constructor()
    {
        // Input com a url
        this._inputUrl = document.querySelector('input[name=url]');

        this._audio = new Audio();

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
    }

    /**
     * Faz o request pelo audio
     */
    request()
    {
        this._audio.requestAudio(this._inputUrl.value)
            .then(response => {
                let youtube = response[1];
                let title = response[2];

                response[0].then(response => this._handleResponse(response, youtube, title));
            }).catch(err => {
                this._notification.type = 'danger'
                this._notification.text = err
            })
    }

    _handleResponse(response, youtube, title) {
        if (response) {
            this._notification.type = 'success';
            this._notification.text = 'Sua musica esta pronta para download...';
            this._download.path = youtube.path;
            this._download.title = title;
            this._download.text = `Download`;
            return;
        }

        this._notification.type = 'danger';
        this._notification.text = 'Ooops... Ocorreu um erro no seu download. Talvez a url esteja invalida';
        this._download.disabled = true;
        this._download.text = `Ocorreu um erro`;
    }
}
