export default class View {

    /**
     * Retorna uma instancia da classe View
     * Classe base para o template engine
     */
    constructor(element) {
        this._element = document.querySelector(element);
    }

    /**
     * Retorna um erro caso a classe filha nao implemente esse metodo
     * Forca a classe que a extende a ter esse metodo
     */
    template() {
        throw new Error('The template method must be implemented');
    }

    /**
     * Faz o update no DOM de acordo com o template da classe
     * Se a classe filha conter o metodo callback, esse metodo e chamado
     * Serve para acoes apos o html ter sido atualizado
     *
     * @param {Object} model
     * @param {Function} callback
     */
    update(model, callback = null) {
        this._element.innerHTML = this.template(model);

        Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .forEach(iten => iten == 'callback' ? this.callback() :'');
    }
}
