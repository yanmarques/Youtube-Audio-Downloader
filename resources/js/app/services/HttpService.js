import Request from '../models/Request';

export default class HttpService {

    /**
     * Faz uma requisicao do tipo GET na url
     * Retorna uma promise
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
    get(url, config = {}) {

        config.hasOwnProperty('onBeforeSend') ?
            config.onBeforeSend() : '';

        if (fetch) {
            return fetch(url).then(response => new Request(response.status, response.json(), response))
                .catch(error => error);
        }

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            xhr.onreadystatechange = () => {
                if (this._onSuccess(xhr)) {
                    if (this._isSuccess(xhr)) {
                        resolve(new Request(xhr.status, JSON.parse(xhr.responseText), xhr));
                    }
                    else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send();
        });
    }

    /**
     * Envia uma requisicao do tipo POST na url
     * Retorna uma promise
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
    post(url, config) {

        if ( ! this._validateCfg(config)) throw new Error('Missing arguments on configuration');

        config.hasOwnProperty('onBeforeSend') ?
            config.onBeforeSend() : '';

        if (fetch) {
            return fetch(url, this._requestInfo(config));
        }

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);

            xhr = this._getHeadersConfig(config, xhr, setRequestHeader);

            xhr.onreadystatechange = () => {
                if (this._onSuccess(xhr)) {
                    if (this._isSuccess(xhr)) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };

            xhr.send(JSON.stringify(config.data));

        });
    }

    /**
     * Retorna uma copia dos status de sucesso no request
     *
     * @return {Array}
     */
    get protocolSuccess() {
        let protocol = [];

        for (let i = 200; i < 300; i++) {
            protocol.push(i);
        }

        return protocol;
    }

    /**
     * Retorna as informacoes e headers da requisicao do tipo POST
     *
     * @param {Object} config
     * @return {Object}
     */
    _requestInfo(config) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        myHeaders = this._getHeadersConfig(config, myHeaders, append);

        return {
            method : 'POST',
            headers : myHeaders,
            mode : 'cors'
        };
    }

    /**
     * Itera por todos os headers do config e seta no object pelo callback
     *
     * @return {Object}
     */
    _getHeadersConfig(config, object, callback) {
        if ( ! config.hasOwnProperty('headers')) {
            throw new Error('The configuration must have an key headers.');
        }

        for (let key in config.headers) {
            object.callback(key, config.headers[key]);
        }

        return object;
    }

    /**
     * Faz a validacao das configuracoes
     * Retorna false se a configuracao nao possui os devidos valores obrigatorios
     *
     * @return {Bool}
     */
    _validateCfg(config) {
        if ( ! config.hasOwnProperty('data')) return false;

        return true;
    }

    /**
     * Retorna um booleano com a verificacao do estado do request
     * Se o request foi enviado com sucesso retorna true
     *
     * @param {XMLHttpRequest} xhr
     * @return {Bool}
     */
    _onSuccess(xhr) {
        return xhr.readyState == 4;
    }

    /**
     * Retorna um booleano com a verificacao do estado da resposta
     * Se a resposta do request foi um protocolo de sucesso retorna true
     *
     * @param {XMLHttpRequest} xhr
     * @return {Bool}
     */
    _isSuccess(xhr) {
        return this._protocolSuccess.includes(xhr.status);
    }
}
