import View from './View';

export default class SearchVideos extends View {

    /**
     * Retorna uma nova instancia de SearchVideos
     * Recebe um elemento como param que sera usado no construtor da class pai
     *
     * @param {String} element
     */
    constructor(element) {
        super(element);
        this._element = document.querySelector(element);
    }

    /**
     * Remove o elemento do DOM
     */
    static remove() {
        let container = document.querySelector('#js-search-videos');

        container.innerHTML = '';
    }

    /**
     * Template para a notificacao
     * Qualquer alteracao no resultado da pesquisa devera ser feita aqui
     *
     * @param {Object} model
     * @return {HTML}
     */
    template(model) {

        // Se nao retornou nenhum video
        if ( !model.html) {
            return `
                <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
                    <div>
                        <div class="uk-card uk-card-muted uk-card-body">
                            <h1 class="uk-heading-primary">Oops... Nenhum video foi encontrado!</h1>
                        </div>
                    </div>
                </div>
            `;
        }

        return model.html.map(item =>
            `<div class="uk-flex-middle" uk-grid>
                <div class="uk-width-2-3@m uk-text-justify uk-text-large">
                    ${item.description}
                </div>
                <div class="uk-width-1-3@m uk-flex-first">
                    <h3 class="uk-card-title text-center">${item.title}</h3>
                    <div class="uk-inline-clip uk-transition-toggle">
                        ${item.img}
                    </div>
                </div>
            </div>`
        );
    }
}
