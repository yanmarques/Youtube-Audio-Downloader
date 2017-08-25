import View from './View.js';

export default class NotificationView extends View {

    /**
     * Retorna uma nova instancia de DownloadView
     * Recebe um elemento como param que sera usado no construtor da class pai
     *
     * @param {String} element
     */
    constructor(element) {
        super(element);
        this._my_element = element;
    }

    callback() {
        console.log($('.notification').data());
        UIkit.notification($('.notification').data());
    }

    /**
     * Template para a notificacao
     * Qualquer alteracao na notificacao devera ser feita aqui
     *
     * @param {Object} model
     * @return {HTML}
     */
    template(model)
    {
        return `
            <button class="notification" id="notification" type="button" data-message="${model.text}" data-status="${model.type}"></button>
        `;
    }
}
