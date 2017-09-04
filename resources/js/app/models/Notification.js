export default class Notification {
    /**
     * Retorna uma instancia da classe Notification
     */
    constructor(type)
    {
        this._type = type;
        this._text;
    }

    /**
     * Retorna o texto para a notificacao
     *
     * @return {String}
     */
    get text() {
        return this._text;
    }

    /**
     * Seta o texto para a notificacao
     *
     * @param {String} text
     */
    set text(text) {
        this._text = text;
    }

    /**
     * Retorna o tipo da notificacao
     * Tipos disponiveis - success, danger, info, warning
     *
     * @return {String}
     */
    get type() {
        return this._type;
    }
}
