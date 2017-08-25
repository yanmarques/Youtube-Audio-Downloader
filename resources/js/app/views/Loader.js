export default class Loader{

    /**
     * Retorna uma instancia da classe Loader
     * Classe para mostrar spinner quando estiver fazendo alguma requisicao longa
     */
    constructor() {
        // Container onde ira ficar o loader
        this._container = document.querySelector('#js-loader');
        this._body = document.querySelector('body');
        this._form = $('#form-center');
        this._actions = $('#js-actions');
    }

    /**
     * Inicia o carregamento com o spinner
     */
    load() {
        this._form.hide();
        this._body.classList.add(this._classBackgroundLoading);
        this._container.innerHTML = this._template();
    }

    /**
     * Finaliza o carregamento
     */
    stop() {
        this._actions.show();
        this._body.classList.remove(this._classBackgroundLoading);
        document.querySelector('#' + this._loaderId).remove();
    }

    /**
     * Retorna a classe CSS para o loadin
     *
     * @return {String}
     */
    get _classBackgroundLoading() {
        return 'is-loading';
    }

    /**
     * Retorna o ID da imagem com o spinner
     *
     * @return {String}
     */
    get _loaderId() {
        return 'js-loader-img';
    }

    /**
     * Template com a imagem do spinner
     * Qualquer alteracao no spinner de loadin deve ser realizado aqui
     *
     * @return {HTML}
     */
    _template() {
        return `<img src="img/spinner.gif" id="${this._loaderId}" alt="Loading">`;
    }
}
