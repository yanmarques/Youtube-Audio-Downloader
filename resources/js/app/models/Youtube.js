import Url from '../helpers/Url.js';
import HttpService from '../services/HttpService.js';
import Modal from '../views/Modal.js';
import Loader from '../views/Loader.js';

export default class Youtube {

    /**
     * Retorna uma instancia da classe Youtube
     */
    constructor() {
        this._id;
        this._title;
        this._http    = new HttpService();
        this._loader  = new Loader();
    }

    /**
     * Retorna o id do video
     *
     * @return {String} id
     */
    get id() {
        return this._id;
    }

    /**
     * Retorna o titulo do video
     *
     * @return {String} title
     */
    get title() {
        return this._title;
    }

    /**
     * Retorna o caminho onde o video esta armazenado
     *
     * @return {String} path
     */
    get path() {
        return `app/uploads/${this._title}.mp3`;
    }

    /**
     * Atualiza o DOM com o frame do video
     *
     * @param {String} title
     * @param {String} id
     * @return void
     */
    update(title, id) {
        this._title = title.replace(/\s/g, '_');
        this._id = id;

        let frame = document.querySelector('#js-youtube');
        frame.innerHTML = this._template(this._id);

        $(function() {
            $('iframe[src*="www.youtube.com"]').each(function() {
                $(this).css('max-width', '100%');
                UIkit.responsiveElement(this);
            });
        });
    }

    /**
     * Faz o parse na url buscando o titulo e o id do video
     *
     * @param {String} url
     * @return {Promise}
     */
    requestVideo(url) {
        let urlParse = Url.convert('/app/Controllers/Api/Parse.php', `url=${url}`);

        return this._http.get(urlParse,
                    {
                        onBeforeSend: () => {
                            Modal.close();
                            this._loader.load();
                        }
                    });
    }

    /**
     * TODO -> Youtube API
     * Template com o frame do video
     * Qualquer mudanca no html do frame do video deve ser realizada aqui
     *
     * @param {String} id
     * @return {HTML}
     */
    _template(id) {
        return `<div class="video-frame">
                    <iframe id="ytplayer" type="text/html" width="640" height="360" src="http://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" uk-responsive/>
                </div>
        `;
    }
}
