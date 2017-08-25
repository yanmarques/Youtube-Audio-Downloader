import Carousel from './helpers/Carousel.js';
import RequestController from './controllers/RequestController.js';

const formRequest = document.querySelector('#js-form-request');
const requestController = new RequestController();
const fakeSubmit = document.querySelector('.uk-search-input');

$(document).ready(function() {
    new Carousel('.slide');
});

formRequest.addEventListener('submit', (event) => {
        event.preventDefault();
        requestController.request()
    }
);

fakeSubmit.addEventListener('focus', () => {
    fakeSubmit.blur();
});
