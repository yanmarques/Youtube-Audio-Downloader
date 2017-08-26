export default class HttpService {

    /**
     * Retorna uma instancia da classe HttpService
     */
    constructor()
    {
        this._protocolSuccess = [200, 201, 202];
        this._protocolError = [404, 500, 504];
    }

    /**
     * Faz uma requisicao do tipo GET na url
     * Retorna uma promise
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
    get(url, config = {}) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            config.hasOwnProperty('onBeforeSend') ?
                config.onBeforeSend() : '';

            xhr.onreadystatechange = () => {
                if (this._onSuccess(xhr)) {
                    if (this._isSuccess(xhr)) {
                        resolve(JSON.parse(xhr.responseText));
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
     * TODO => configuration 
     * Envia uma requisicao do tipo POST na url
     * Retorna uma promise
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
    post(url, config) {

        if ( ! this._validateCfg(config)) throw new Error('Missing arguments on configuration');

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);
            xhr.setRequestHeader("ContentType", "application/json");

            config.hasOwnProperty('onBeforeSend') ?
                config.onBeforeSend() : '';

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
    get protocolSuccess()
    {
        return [].concat(this._protocolSuccess)
    }

    /**
     * Retorna uma copia dos status de erro no request
     *
     * @return {Array}
     */
    get protocolError()
    {
        return [].concat(this._protocolError)
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
    _onSuccess(xhr)
    {
        return xhr.readyState == 4;
    }

    /**
     * Retorna um booleano com a verificacao do estado da resposta
     * Se a resposta do request foi um protocolo de sucesso retorna true
     *
     * @param {XMLHttpRequest} xhr
     * @return {Bool}
     */
    _isSuccess(xhr)
    {
        return this._protocolSuccess.includes(xhr.status);
    }
}
