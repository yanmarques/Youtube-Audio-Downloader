import HttpService from './HttpService';
import Url from '../helpers/Url';
import Modal from '../views/Modal';

export default class Parse {

    /**
     * Retorna uma instancia de Parse
     */
    constructor() {
        this._http = new HttpService();
    }

    /**
     * Url para fazer o parse da Url inserida buscando o id e o titulo
     */
    get _path() {
        return '/app/Controllers/Api/Parse.php';
    }

    /**
     * Faz o request retornando o uma promise com o id e o titulo da url inserida
     *
     * @param {String} url
     * @return {Promise}
     */
    request(url) {
        Modal.close();
        return this._http.get(Url.convert(this._path, `url=${url}`));
    }
}
