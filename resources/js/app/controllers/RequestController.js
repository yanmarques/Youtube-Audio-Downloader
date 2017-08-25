import Bind from '../helpers/Bind.js';
import Audio from '../services/Audio.js';

export default class RequestController {
    /**
     * Retorna uma instancia da classe
     */
    constructor()
    {
        // Input com a url
        this._inputUrl = document.querySelector('input[name=url]');

        this._audio = new Audio();
    }

    /**
     * Faz o request pelo audio
     */
    request()
    {
        this._audio.requestAudio(this._inputUrl.value);

        .then(response => {
            this._notification.type = 'success';
            this._notification.text = 'Sua musica esta pronta para download...';

            this._download.text = `Download`;
        }).catch(err => {
            this._notification.type = 'danger'
            this._notification.text = 'Ocorreu um erro'
        })
    }
}
