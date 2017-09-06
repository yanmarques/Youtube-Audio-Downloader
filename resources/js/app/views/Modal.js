export default class Modal {

    /**
     * Fecha a modal de pesquisa
     */
    static close() {
        let element  = document.querySelector('#modal-full');
        UIkit.modal(element).hide();
    }

    /**
     * Abre a modal de pesquisa
     */
    static show() {
        let element  = document.querySelector('#modal-full');
        UIkit.modal(element).show();
    }
}
