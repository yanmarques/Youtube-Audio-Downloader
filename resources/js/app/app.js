import Carousel from './helpers/Carousel.js';
import Listeners from './services/Listeners';
import App from './views/App';

let app = new App('#js-app-seach-input');
app.update();

Listeners.init();

$(document).ready(function() {
    new Carousel('.slide');
    $(this).scrollTop(0);
});
