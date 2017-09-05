import HttpService from './HttpService';

export default class RequestServices {

    /**
     * Retorna uma instancia da classe.
     * Classe que functiona como uma interface
     */
    constructor() {
        this._http = new HttpService;
    }

    /**
     * Metodo a ser implementado nas classes que a extendem
     */
    get _path() {
        throw new Error("The getter 'path' must be implemented as a class method.");
    }

    /**
     * Metodo a ser implementado nas classes que a extendem
     */
    request() {
        throw new Error("The method 'request' must be implemented as a class method.");
    }
}
