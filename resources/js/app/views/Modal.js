export default class Modal {

    /**
     * Fecha a modal de pesquisa
     */
    static close()
    {
        let html = document.querySelector('html');
        let div  = document.querySelector('#modal-full');

        html.classList.remove('.uk-modal-page');
        $(div).fadeOut(200);
        setTimeout(() => div.classList.remove('.uk-open'), 2000);
    }
}
