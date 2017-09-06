import View from './View';

export default class WaitForDownload extends View {

    /**
     * Retorna uma instancia da classe WaitForDownload
     */
    constructor(element) {
        super(element);
        this._element = document.querySelector(element);
    }

    /**
     * Esconde botao de download carregando
     */
    static hide() {
        let container = document.querySelector('#js-actions');

        ! container.classList.contains('not-active') ? container.classList.add('not-active') :'';
    }

    /**
     * Template para o botao de loading enquanto o audio esta sendo resolvido
     * Qualquer alteracao no botao deve ser realizado aqui
     *
     * @return {HTML}
     */
    template() {

        this._element.classList.contains('not-active') ? this._element.classList.remove('not-active') :'';

        return `
            <div class="button-loading">
                <button class="uk-button uk-button-secondary">
                    <div uk-spinner></div>
                </button>
            </div>

            <div class="button-search-down">
                <form>
                    <button type="submit" class="uk-button uk-button-secondary" href="#modal-full" uk-toggle>
                        <span uk-icon="icon: search; ratio: 1.1" style="color: #fff;"></span>
                        Search for another music...
                    </button>
                </form>
            </div>
        `;
    }
}
