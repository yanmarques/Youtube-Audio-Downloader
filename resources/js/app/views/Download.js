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
        return `
            <div>
                <a href="${model.path}" class="uk-button uk-button-secondary js-download-audio" download>
                    <span uk-icon="icon: download; ratio: 1.3" style="color: #fff;"></span>
                    ${model.title}
                </a>
            </div>

            <div class="button-search-down">
                <a class="uk-button uk-button-secondary" href="#modal-full" uk-toggle>
                    <span uk-icon="icon: search; ratio: 1.1" style="color: #fff;"></span>
                    Search for another music...
                </a>
            </div>
        `;
    }
}
