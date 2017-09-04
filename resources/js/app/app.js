import Carousel from './helpers/Carousel.js';
import RequestController from './controllers/RequestController.js';
import App from './views/App';

let app = new App('#js-app-seach-input');
app.update();

const formRequest = document.querySelector('#js-form-request');
const requestController = new RequestController();
const fakeSubmit = document.querySelector('.uk-search-input');

$(document).ready(function() {
    new Carousel('.slide');
});

formRequest.addEventListener('submit', (event) => {
        event.preventDefault();
        requestController.request();
    }
);

fakeSubmit.addEventListener('focus', () => {
    fakeSubmit.blur();
});
