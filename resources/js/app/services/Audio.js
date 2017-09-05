import RequestServices from './RequestServices';
import WaitForDownload from '../views/WaitForDownload.js';
import Url from '../helpers/Url';

export default class Audio extends RequestServices {

    /**
     * Retorna uma instancia da classe Audio
     * Essa classe faz o request do video e do audio
     */
    constructor() {
        super();
        this._wait = new WaitForDownload('#js-actions');
    }

    /**
     * Url para fazer download do audio
     */
    get _path() {
        return '/app/Controllers/AudioController.php';
    }

    /**
     * Faz a requisicao pelo video e pelo audio
     *
     * @param {String} id
     * @return {Promise}
     */
    request(id) {
        return this._http.get(Url.convert(this._path, {
                'id' : id
            }), {
                onBeforeSend: () => this._wait.update()
        });
    }
}
