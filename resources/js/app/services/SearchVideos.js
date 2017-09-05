import HttpService from './HttpService';
import Url from '../helpers/Url';
import Loader from '../views/Loader';
import RequestServices from './RequestServices';

export default class SearchVideos extends RequestServices {

    /**
     * Retorna uma instancia de Parse
     */
    constructor() {
        this._http = new HttpService();
        this.loader = new Loader();
    }

    /**
     * Url para fazer o parse da Url inserida buscando o pelo HTML com os videos do YouTube
     */
    get _path() {
        return '/app/Controllers/SearchController.php';
    }

    /**
     * Faz o request retornando o uma promise com o HTML do resultado da query
     *
     * @param {String} query
     * @return {Promise}
     */
    request(query) {
        this.loader.load();
        return this._http.get(Url.convert(this._path, {
            'query' : query
        }));
    }

}
