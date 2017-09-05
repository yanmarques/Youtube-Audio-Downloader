import Carousel from './helpers/Carousel.js';
import RequestController from './controllers/RequestController.js';
import App from './views/App';

let app = new App('#js-app-seach-input');
app.update();

const formRequest = document.querySelector('#js-form-request');
const requestController = new RequestController();
const fakeSubmit = document.querySelector('.uk-search-input');
const searchResult = document.querySelector('#js-search-videos');

$(document).ready(function() {
    new Carousel('.slide');
});

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
        requestController.request(event.target.getAttribute('video-id'));
    }
});
