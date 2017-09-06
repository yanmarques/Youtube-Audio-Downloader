export default class SearchVideos {

    /**
     * Retorna uma instancia da classe SearchVideos
     */
    constructor() {
        this._html;
        this._parser = new DOMParser();

        // Numero maximo de videos renderizados no DOM
        this._maxOfVideos = 10;
    }

    /**
     * Retorna o HTML resolvido com os dados da musica
     *
     * @return {Array}
     */
    get html() {
        return this._resolveHtml();
    }

    /**
     * Seta o conteudo do HTML em forma de String
     *
     * @param {String} content
     */
    set content(content) {
        this._html = content;
    }

    /**
     * Resolve o HTML retornando os elementos criados
     *
     * @return {Array}
     */
    _resolveHtml() {
        if (this._html === undefined) {
            throw new Error('Any html document was set. First insert a html document.');
        }

        let html = this._html;

        // Transforma a String em um documento HTML
        let parsedHtml = this._parser.parseFromString(html, 'text/html');

        // Busca pela div onde se encontra os dados do video
        // Pode quebrar caso o Youtube atualize o DOM e mude a classe
        let content = parsedHtml.querySelectorAll('div.yt-lockup');

        html = [];

        if (content.length === 0) return false;

        let length = content.length >= this._maxOfVideos ? this._maxOfVideos : content.length;

        for (let i = 0; i < length; i++) {
            let contentParsed = this._parser.parseFromString(content[i].outerHTML, 'text/html');

            let id  = contentParsed.querySelector('div.yt-lockup-thumbnail > a');
            let img = contentParsed.querySelector('img');
            let title = contentParsed.querySelector('div.yt-lockup-content > h3.yt-lockup-title > a');
            let description = contentParsed.querySelector('div.yt-lockup-content > div.yt-lockup-description');

            if (id !== null) {
                id = id.getAttribute('href').split('v=')[1];
            }

            html.push({
                'id' : id,
                'img' : img,
                'title' : title,
                'description' : description
            });
        }

        html = html.filter(this._filterId);

        return this._createElements(html);
    }

    /**
     * Filtra os itens retirando aqueles com ID nulo, undefined, ou que sao uma playlist
     *
     * @return {Boolean}
     */
    _filterId(item) {
        if (item.id === undefined || item.id === null) {
            return false;
        }

        // Se for uma playlist
        if (/^\w+(&\S*)?&list=/.test(item.id)) {
            return false;
        }

        return true;
    }

    /**
     * Cria os elementos de titulo, imagem e descricao
     *
     * @param {Array}
     * @return {Array}
     */
    _createElements(html) {
        return html.map(item => {
            let src = item.img.getAttribute('src');

            if (item.img.hasAttribute('data-thumb')) {
                src = item.img.getAttribute('data-thumb');
            }

            item.img = this._imageTemplate(src, item.title.textContent);
            item.title = this._titleTemplate(item.id, item.title.textContent);
            item.description = item.description !== null ? item.description.textContent : '';

            return item;
        });
    }

    /**
     * Template para criar a imagem, qualquer alteracao na imagem deve ser realizado aqui
     *
     * @param {String} src
     * @param {String} title
     * @return {HTML}
     */
    _imageTemplate(src, title) {
        return  `<img class="uk-transition-scale-up uk-transition-opaque" title="${title}" alt="${title}" src="${src}" width="420" height="312">`;
    }

    /**
     * Template para criar o titulo, qualquer alteracao na imagem deve ser realizado aqui
     *
     * @param {String} id
     * @param {String} title
     * @return {HTML}
     */
    _titleTemplate(id, title) {
        return `<a class="js-video-result" video-id=${id}>${title}</a>`
    }
}
