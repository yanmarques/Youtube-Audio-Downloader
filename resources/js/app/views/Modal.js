export default class Modal {

    /**
     * Fecha a modal de pesquisa
     */
    static close()
    {
        let html = document.querySelector('html');
        let body = document.querySelector('body');
        let div  = document.querySelector('#modal-full');

        body.removeAttribute("style");
        html.removeAttribute("class");
        
        $(div).fadeOut(200);
        setTimeout(() => div.classList.remove('.uk-open'), 2000);
    }
}
