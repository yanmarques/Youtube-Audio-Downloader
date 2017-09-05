import RequestServices from './RequestServices';
import Url from '../helpers/Url';

export default class Parse extends RequestServices {

    /**
     * Retorna uma instancia de Parse
     */
    constructor() {
        super();
    }

    /**
     * Url para fazer o parse da Url inserida buscando o id e o titulo
     */
    get _path() {
        return '/app/Controllers/ParseController.php';
    }

    /**
     * Faz o request retornando o uma promise com o id e o titulo da url inserida
     *
     * @param {String} url
     * @return {Promise}
     */
    request(url) {
        return this._http.get(Url.convert(this._path, {
            'url' : url
        }));
    }
}
