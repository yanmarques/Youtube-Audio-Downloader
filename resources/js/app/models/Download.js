import Url from '../helpers/Url';

export default class Download {

    /**
     * Retorna uma nova instancia de Download
     */
    constructor() {
        this._title;
        this._fileName;
    }

    /**
     * Retorna o title do audio
     *
     * @return {String}
     */
    get title() {
        return this._title;
    }

    /**
     * Retorna o nome do arquivo salvo no servidor
     *
     * @return {String}
     */
    get fileName() {
        return this._fileName;
    }

    /**
     * Retorna o caminho para fazer o download
     *
     * @return {String} path
     */
    get action() {
        return '/app/Controllers/DownloadController.php';
    }

    /**
     * Seta o nome do arquivo que foi salvo com o hash
     *
     * @param {String} fileName
     */
    set fileName(fileName) {
        this._fileName = fileName;
    }

    /**
     * Seta o titlo da musica
     *
     * @param {String} title
     */
    set title(title) {
        this._title = title;
    }
}
