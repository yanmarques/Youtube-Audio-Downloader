import View from './View';

export default class App extends View {

    /**
     * Retorna uma instancia da class App que extende View
     *
     * @param {HTML} element
     * @return {Object}
     */
    constructor(element) {
        super(element);
        this._element = document.querySelector(element);
    }

    /**
     * Functiona como um toggle, quando o metodo update e chamado ele alterna
     * entre os estados do elemento, visivel ou nao
     */
    static toggle() {
        let element = document.querySelector('#js-app-seach-input');

        if (element.classList.contains('is-active')) {
            element.classList.remove('is-active');
        }
        else {
            element.classList.add('is-active');
        }
    }

    /**
     * Template para o input de pesquisa
     * Qualquer alteracao no input devera ser feita aqui
     *
     * @return {HTML}
     */
    template() {
        return `
            <div id="form-center" class="uk-position-center">
                <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <form class="uk-search uk-search-default form-search">
                                <span uk-search-icon></span>
                                <input class="uk-search-input" type="search" placeholder="Search..." href="#modal-full" uk-toggle>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        `;
    }

}
