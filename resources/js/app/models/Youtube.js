export default class Youtube {

    /**
     * Retorna uma instancia da classe Youtube
     */
    constructor() {
        this._id;
        this._title;
        this._query;
    }

    /**
     * Retorna o id do video
     *
     * @return {String} id
     */
    get id() {
        return this._id;
    }

    /**
     * Retorna o titulo do video
     *
     * @return {String} title
     */
    get title() {
        return this._title;
    }

    /**
     * Seta o id a partir de uma url do Youtube
     */
    set id(url) {
        let video_id = url.split('v=')[1];
        this._id = video_id;
    }

    /**
     * Seta o titulo do video
     */
    set title(title) {
        this._title = title;
    }

    /**
     * Verifica se a url passada e uma Url do youtube valida
     *
     * @return {Boolean}
     */
    static isUrl(url) {
        return /^https:\/\/(?:www\.|m\.)?youtube\.com\/watch\?v=.+(&\S*)?$/.test(url);
    }

    /**
     * Gera uma url valida a partir do ID do video
     *
     * @param {String} id
     * @return {String}
     */
    static generateUrl(id) {
        return `https://www.youtube.com/watch?v=${id}`;
    }
}
