export default class WaitForDownload {

    /**
     * Retorna uma instancia da classe WaitForDownload
     */
    constructor(element) {
        this._element = document.querySelector(element);
    }

    /**
     * Renderiza o html com o template
     */
    render() {
        this._element.innerHTML = this.template();
    }

    /**
     * Template para o botao de loading enquanto o audio esta sendo resolvido
     * Qualquer alteracao no botao deve ser realizado aqui
     *
     * @return {HTML}
     */
    template() {
        return `
            <button class="uk-button uk-button-secondary">
                <div uk-spinner></div>
            </button>
        `;
    }
}
