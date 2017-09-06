import View from './View.js';

export default class DownloadView extends View {

    /**
     * Retorna uma nova instancia de DownloadView
     * Recebe um elemento como param que sera usado no construtor da class pai
     *
     * @param {String} element
     */
    constructor(element) {
        super(element);
    }

    /**
     * Template para o botao de download
     * Qualquer alteracao no botao de download devera ser feita aqui
     *
     * @param {Object} model
     * @return {HTML}
     */
    template(model) {

        // <input class="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom" type="button" value="Download ${model.title}"/>
        //     <span uk-icon="icon: download; ratio: 1.3" style="color: #fff;"></span>
        //     Download ${model.title}
        // </button>

        return `
            <div>
                <form action="${model.action}" method="GET" id="form-download">

                    <input type="hidden" name="title" value="${model.title}" />
                    <input type="hidden" name="fileName" value="${model.fileName}" />

                </form>

                <button class="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom js-btn-download">
                    <span uk-icon="icon: download; ratio: 1.3" style="color: #fff;"></span>
                    Download ${model.title}
                </button>

                <button class="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom js-btn-show-modal">
                    <span uk-icon="icon: search; ratio: 1.1" style="color: #fff;"></span>
                    Search for another music...
                </button>
            </div>
        `;
    }
}
