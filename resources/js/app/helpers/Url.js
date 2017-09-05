export default class Url {

    /**
     * Converte os argumentos passados em uma url valida
     *
     * @param {String} path
     * @param {Object} parameters
     * @return {String}
     */
    static convert(path, parameters)
    {

        if (typeof parameters !== 'object') {
            throw new Error(`The second argument must be an Object. ${typeof parameters} given.`);
        }

        let params = [];

        for (let key in parameters) {
            params.push(encodeURI(`${key}=${parameters[key]}`));
        }

        return window.location.origin
                + path
                + '?' + params.join('&');
    }
}
