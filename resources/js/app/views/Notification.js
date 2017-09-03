export default class Notification {
    /**
     * Retorna uma instancia da classe Notification
     */
    constructor()
    {
        this._text;
        this._type;
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

    /**
     * Seta o tipo da notificacao
     * Tipos disponiveis - success, danger
     *
     * @param {String} text
     */
    set type(type) {
        this._type = type;
    }
}
