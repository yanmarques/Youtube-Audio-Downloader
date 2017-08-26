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
            <a href="${model.path}" class="uk-button uk-button-secondary js-download-audio" download>${model.text}</a>
        `;
    }
}
