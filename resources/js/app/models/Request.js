export default class Request {

    /**
     * Retorna uma instancia da classe Request
     */
    constructor(status, response, request = null) {
        this._status = status;
        this._response = response;
        this._request = request;
    }

    /**
     * Retorna o status do request
     *
     * @return {Integer}
     */
    get status() {
        return this._status;
    }

    /**
     * Retorna o corpo do request
     *
     * @return {Promise} {Object}
     */
    get request() {
        return this._request;
    }

    /**
     * Retorna o callback
     */
    getResponse(callback) {

        if (typeof callback !== typeof Function) {
            throw new Error(`The argument must be a Function. ${typeof callback} given.`);
        }

        if (this._response instanceof Promise) {
            return this._response.then(response => callback(response));
        }

        return callback(this._response);
    }
}
