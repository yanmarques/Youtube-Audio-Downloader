/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ProxyFactory__ = __webpack_require__(5);


class Bind {
    constructor(object, view, ...props) {
        return __WEBPACK_IMPORTED_MODULE_0__models_ProxyFactory__["a" /* default */].create(
                object,
                props,
                model => view.update(model)
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bind;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View {
    constructor(element) {
        this._element = document.querySelector(element);
    }

    template() {
        throw new Error('The template method must be implemented');
    }

    update(model, callback = null) {
        this._element.innerHTML = this.template(model);

        Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .forEach(iten => iten == 'callback' ? this.callback() :'');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Carousel_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_RequestController_js__ = __webpack_require__(4);



const formRequest = document.querySelector('#js-form-request');
const requestController = new __WEBPACK_IMPORTED_MODULE_1__controllers_RequestController_js__["a" /* default */]();

$(document).ready(function() {
    new __WEBPACK_IMPORTED_MODULE_0__helpers_Carousel_js__["a" /* default */]('.slide');
});

formRequest.addEventListener('submit', (event) => {
        event.preventDefault();
        requestController.request()
    }
);

const fakeSubmit = document.querySelector('.uk-search-input');

fakeSubmit.addEventListener('focus', () => {
    fakeSubmit.blur();
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Carousel {
    constructor(slideClass)
    {
        this.slide = $(slideClass);
        this.dataClass = this._templateClass();
        this.carousel();
    }

    get length()
    {
        return this.dataClass.length - 1;
    }

    carousel()
    {
        let i = 1;
        setInterval(() => {
            i == 0 ? this._backToBegin(this.dataClass[i], 300)
                    : this._fadeImages(this.dataClass[i], i, 300);
            i = (i == 3) ? 0 : i + 1;
        }, 60000);
    }

    _fadeImages(itenClass, index, time)
    {
        let last = this.dataClass[index - 1];
        this.slide.fadeOut(time);

        setTimeout(() => {
            this.slide.removeClass(last);
            this.slide.addClass(itenClass);
            this.slide.fadeIn(time);
        },time);
    }

    _backToBegin(itenClass, time)
    {
        this.slide.fadeOut(time);

        setTimeout(() => {
            this.slide.removeClass(this.dataClass[this.length]);
            this.slide.addClass(itenClass);
            this.slide.fadeIn(time);
        },time);
    }

    _templateClass()
    {
        return [
                'background-img-1',
                'background-img-2',
                'background-img-3',
                'background-img-4'
            ];
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Carousel;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Audio_js__ = __webpack_require__(6);



class RequestController {
    /**
     * Retorna uma instancia da classe
     */
    constructor()
    {
        // Input com a url
        this._inputUrl = document.querySelector('input[name=url]');

        this._audio = new __WEBPACK_IMPORTED_MODULE_1__services_Audio_js__["a" /* default */]();
    }

    /**
     * Faz o request pelo audio
     */
    request()
    {
        this._audio.requestAudio(this._inputUrl.value);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestController;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProxyFactory {
    static create(object, props, callback)
    {
        return new Proxy(object, {
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                    return function() {
                        let response = Reflect.apply(target[prop], target, arguments);
                        callback(target);
                        return response;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                let response = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) callback(target);
                return response;
            }
        });
    }

    static _isFunction(func) {
        return typeof (func) == typeof(Function);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProxyFactory;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpService_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Youtube_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Loader_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_Url_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_Bind_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_Modal_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_DownloadView_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_Download_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_Notification__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_NotificationView__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_WaitForDownload_js__ = __webpack_require__(16);












class Audio {
    constructor() {

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notification = new __WEBPACK_IMPORTED_MODULE_4__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_8__views_Notification__["a" /* default */](),
                new __WEBPACK_IMPORTED_MODULE_9__views_NotificationView__["a" /* default */]('#js-message'),
                'text'
        );

        this._download = new __WEBPACK_IMPORTED_MODULE_4__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_7__views_Download_js__["a" /* default */](),
                new __WEBPACK_IMPORTED_MODULE_6__views_DownloadView_js__["a" /* default */]('#js-actions'),
                'text'
        );

        // Webservice
        this._http = new __WEBPACK_IMPORTED_MODULE_0__HttpService_js__["a" /* default */]();

        // Loader
        this._loader = new __WEBPACK_IMPORTED_MODULE_2__views_Loader_js__["a" /* default */]();

        this._youtube = new __WEBPACK_IMPORTED_MODULE_1__models_Youtube_js__["a" /* default */]();

        this._wait = new __WEBPACK_IMPORTED_MODULE_10__views_WaitForDownload_js__["a" /* default */]('#js-actions');
    }

    requestAudio(url) {
        let urlParse = __WEBPACK_IMPORTED_MODULE_3__helpers_Url_js__["a" /* default */].convert('/app/Controllers/Api/Parse.php', `url=${url}`);

        let requestParse = this._http
                .get(urlParse,
                    {
                        onBeforeSend: () => {
                            __WEBPACK_IMPORTED_MODULE_5__views_Modal_js__["a" /* default */].close();
                            this._loader.load();
                        }
                    });

        requestParse.then(response => {
                let attributes = response.reduce((finalArray, array) => finalArray.concat(array), [])

                this._youtube.update(...attributes);
                this._loader.stop()

                this._wait.render();

                this._download.path = this._youtube.title;
                this._download.title = attributes[0];

                let urlAudio = __WEBPACK_IMPORTED_MODULE_3__helpers_Url_js__["a" /* default */].convert('/app/Controllers/Api/Audio.php', `title=${this._youtube.title}`, `id=${this._youtube.id}`);

                this._http.get(urlAudio).then(response => {
                    this._notification.type = 'success';
                    this._notification.text = 'Sua musica esta pronta para download...';

                    this._download.text = `Download`;
                }).catch(err => {
                    this._notification.type = 'danger'
                    this._notification.text = 'Ocorreu um erro'
                })
            })
            .catch(err => {
                console.log(err)
                this._loader.stop()
            });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Audio;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HttpService {
    /**
     * Faz uma requisicao do tipo GET na url
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
    get(url, config = {}) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            config.hasOwnProperty('onBeforeSend') ?
                config.onBeforeSend() : '';

            xhr.onreadystatechange = () => {
                if (this._onSuccess(xhr)) {
                    if (this._isSuccess(xhr)) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send();
        });
    }

    post(url, config) {

        if ( ! this._validateCfg(config)) throw new Error('Missing arguments on configuration');

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);
            xhr.setRequestHeader("ContentType", "application/json");

            config.hasOwnProperty('onBeforeSend') ?
                config.onBeforeSend() : '';

            xhr.onreadystatechange = () => {
                if (this._onSuccess(xhr)) {
                    if (this._isSuccess(xhr)) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };

            xhr.send(JSON.stringify(config.data));

        });
    }

    get _protocolSuccess()
    {
        return [200, 201, 202];
    }

    _validateCfg(config) {
        if ( ! config.hasOwnProperty('data')) return false;

        return true;
    }

    _onSuccess(xhr)
    {
        return xhr.readyState == 4;
    }

    _isSuccess(xhr)
    {
        return this._protocolSuccess.includes(xhr.status);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HttpService;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Youtube {

    constructor() {
        this._id;
        this._title;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get path() {
        return `app/Controllers/Api/uploads/${this._title}.mp3`;
    }

    update(title, id) {
        this._title = title.replace(/\s/g, '_');
        this._id = id;

        let frame = document.querySelector('#js-youtube');
        frame.innerHTML = this._template(this._id);
    }

    _template(id) {
        return `<div class="video-frame">
                    <iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" allowfullscreen/>
                </div>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Youtube;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Loader{

    constructor()
    {
        // Container onde ira ficar o loader
        this._container = document.querySelector('#js-loader');
        this._body = document.querySelector('body');
        this._form = $('#form-center');
        this._actions = $('#js-actions');
    }

    load()
    {
        this._form.hide();
        this._body.classList.add(this._classBackgroundLoading);
        this._container.innerHTML = this._template();
    }

    stop()
    {
        this._actions.show();
        this._body.classList.remove(this._classBackgroundLoading);
        document.querySelector('#' + this._loaderId).remove();
    }

    get _classBackgroundLoading()
    {
        return 'is-loading';
    }

    get _loaderId()
    {
        return 'js-loader-img';
    }

    _template()
    {
        return `<img src="img/spinner.gif" id="${this._loaderId}" alt="Loading">`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Loader;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Url {
    static convert(path, ...parameters)
    {
        return window.location.origin
                + path
                + '?' + parameters.join('&');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Url;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Modal {

    // Fecha a modal de pesquisa
    static close()
    {
        let html = document.querySelector('html');
        let div  = document.querySelector('#modal-full');

        html.classList.remove('.uk-modal-page');
        $(div).fadeOut(200);
        setTimeout(() => div.classList.remove('.uk-open'), 2000);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(1);


class DownloadView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* default */] {

    constructor(element) {
        super(element);
    }

    template(model) {
        return `
            <a href="${model.path}" class="uk-button uk-button-secondary js-download-audio" download>${model.text}</a>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DownloadView;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Download {
    constructor() {
        this._text;
        this._path;
        this._title;
    }

    set text(text) {
        this._text = `${text} ${this._title}`;
    }

    get text() {
        return this._text;
    }

    set path(title) {
        this._path = `app/Controllers/Api/uploads/${title}.mp3`;
    }

    set title(title) {
        this._title = title;
    }

    get path() {
        return this._path;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Download;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Notification {

    constructor()
    {
        this._text;
        this._type;
    }

    get text()
    {
        return this._text;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    set text(text) {
        this._text = text;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Notification;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(1);


class NotificationView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* default */]{
    constructor(element) {
        super(element);
        this._my_element = element;
    }

    callback() {
        console.log($('.notification').data());
        UIkit.notification($('.notification').data());
    }

    template(model)
    {
        return `
            <button class="notification" id="notification" type="button" data-message="${model.text}" data-status="${model.type}"></button>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NotificationView;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class WaitForDownload {

    constructor(element) {
        this._element = document.querySelector(element);
    }

    render() {
        this._element.innerHTML = this.template();
    }

    template() {
        return `
            <button class="uk-button uk-button-secondary">
                <div uk-spinner></div>
            </button>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WaitForDownload;



/***/ })
/******/ ]);