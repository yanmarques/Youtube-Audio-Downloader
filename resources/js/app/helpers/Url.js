export default class Url {

    /**
     * Converte os argumentos passados em uma url valida
     *
     * @param {String} path
     * @param {Spread} parameters
     * @return {String}
     */
    static convert(path, ...parameters)
    {
        return window.location.origin
                + path
                + '?' + parameters.join('&');
    }
}
