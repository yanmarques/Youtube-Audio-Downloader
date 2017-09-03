export default class Download {

    /**
     * Retorna uma nova instancia de Download
     */
    constructor() {
        this._text;
        this._path;
        this._title;
        this._disabled = false;
    }

    /**
     * Seta o texto para o botao de download
     *
     * @param {String} text
     */
    set text(text) {
        this._text = `${text} ${this._title}`;
    }

    /**
     * Seta o caminho para download do audio
     *
     * @param {String} title
     */
    set path(path) {
        this._path = path;
    }

    /**
     * Seta o titulo para o botao de Download
     *
     * @param {String} title
     */
    set title(title) {
        this._title = title;
    }

    set disabled(option) {
        if (typeof option !== 'boolean') {
            throw new Error(`The argument must be a bool.${typeof option} given.`);
        }

        this._disabled = option;
    }

    get disabled() {
        return this._disabled;
    }

    /**
     * Retorna o texto
     *
     * @return {String} text
     */
    get text() {
        return this._text;
    }

    /**
     * Retorna o caminho para download do audio
     *
     * @return {String} path
     */
    get path() {
        return this._path;
    }
}
