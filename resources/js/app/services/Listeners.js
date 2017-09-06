import RequestController from '../controllers/RequestController.js';
import Modal from '../views/Modal';

export default class Listeners {

    /**
     * Inicializa os listeners da pagina
     */
    static init() {
        const formRequest = document.querySelector('#js-form-request');
        const requestController = new RequestController();
        const fakeSubmit = document.querySelector('.uk-search-input');
        const searchResult = document.querySelector('#js-search-videos');
        const buttonActions = document.querySelector('#js-actions');

        // Adiciona um listener de submit na pesquisa
        formRequest.addEventListener('submit', event => {
                event.preventDefault();
                requestController.request();
            }
        );

        // Adiciona um listener de focus na 'falsa' pesquisa que abre a modal de pesquisa
        fakeSubmit.addEventListener('focus', () => {
            fakeSubmit.blur();
        });

        // Aciciona um listener de click nos elemento das pesquisas
        searchResult.addEventListener('click', event => {
            event.preventDefault();

            if (event.target.classList.contains('js-video-result')) {
                console.log(event.target.getAttribute('video-id'));
                requestController.request(event.target.getAttribute('video-id'));
            }
        });

        // Aciciona um listener de click na div para abrir modal
        buttonActions.addEventListener('click', event => {
            event.preventDefault();

            if (event.target.classList.contains('js-button-show-modal')) {
                Modal.show();
            }
        });
    }
}
