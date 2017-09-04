import Youtube from './Youtube';

export default class Download extends Youtube{

    /**
     * Retorna uma nova instancia de Download
     */
    constructor() {
        super();
        this._title;
        this._fileName;
    }

    /**
     * Retorna o texto
     *
     * @return {String} text
     */
    get title() {
        return this._title;
    }

    /**
     * Retorna o caminho onde o video esta armazenado
     *
     * @return {String} path
     */
    get path() {
        return `app/uploads/${this._fileName}`;
    }

    /**
     * Seta o texto para o botao de download
     *
     * @param {String} text
     */
    set title(title) {
        this._title = `Download ${title}`;
    }

    /**
     * Seta o nome do arquivo que foi salvo com o hash
     *
     * @param {String} fileName
     */
    set fileName(fileName) {
        this._fileName = fileName;
    }
}
