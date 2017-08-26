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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ProxyFactory__ = __webpack_require__(11);


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
class HttpService {

    /**
     * Retorna uma instancia da classe HttpService
     */
    constructor()
    {
        this._protocolSuccess = [200, 201, 202];
        this._protocolError = [404, 500, 504];
    }

    /**
     * Faz uma requisicao do tipo GET na url
     * Retorna uma promise
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

    /**
     * TODO => configuration 
     * Envia uma requisicao do tipo POST na url
     * Retorna uma promise
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
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

    /**
     * Retorna uma copia dos status de sucesso no request
     *
     * @return {Array}
     */
    get protocolSuccess()
    {
        return [].concat(this._protocolSuccess)
    }

    /**
     * Retorna uma copia dos status de erro no request
     *
     * @return {Array}
     */
    get protocolError()
    {
        return [].concat(this._protocolError)
    }

    /**
     * Faz a validacao das configuracoes
     * Retorna false se a configuracao nao possui os devidos valores obrigatorios
     *
     * @return {Bool}
     */
    _validateCfg(config) {
        if ( ! config.hasOwnProperty('data')) return false;

        return true;
    }

    /**
     * Retorna um booleano com a verificacao do estado do request
     * Se o request foi enviado com sucesso retorna true
     *
     * @param {XMLHttpRequest} xhr
     * @return {Bool}
     */
    _onSuccess(xhr)
    {
        return xhr.readyState == 4;
    }

    /**
     * Retorna um booleano com a verificacao do estado da resposta
     * Se a resposta do request foi um protocolo de sucesso retorna true
     *
     * @param {XMLHttpRequest} xhr
     * @return {Bool}
     */
    _isSuccess(xhr)
    {
        return this._protocolSuccess.includes(xhr.status);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HttpService;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Url {

    /**
     * Converte os argumentos passados em uma url valida
     *
     * @param {String} path
     * @param {Spread} parameters
     * @return {String}
     */
    static convert(path, ...parameters)
    {
        return window.location.origin
                + path
                + '?' + parameters.join('&');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Url;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Modal {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Loader{

    /**
     * Retorna uma instancia da classe Loader
     * Classe para mostrar spinner quando estiver fazendo alguma requisicao longa
     */
    constructor() {
        // Container onde ira ficar o loader
        this._container = document.querySelector('#js-loader');
        this._body = document.querySelector('body');
        this._form = $('#form-center');
        this._actions = $('#js-actions');
    }

    /**
     * Inicia o carregamento com o spinner
     */
    load() {
        this._form.hide();
        this._body.classList.add(this._classBackgroundLoading);
        this._container.innerHTML = this._template();
    }

    /**
     * Finaliza o carregamento
     */
    stop() {
        this._actions.show();
        this._body.classList.remove(this._classBackgroundLoading);
        this._body.removeAttribute("style");
        document.querySelector('html').removeAttribute("class");
        document.querySelector(this._loaderId).remove();
    }

    /**
     * Retorna a classe CSS para o loadin
     *
     * @return {String}
     */
    get _classBackgroundLoading() {
        return 'is-loading';
    }

    /**
     * Retorna o ID da imagem com o spinner
     *
     * @return {String}
     */
    get _loaderId() {
        return '#js-loader';
    }

    /**
     * Template com a imagem do spinner
     * Qualquer alteracao no spinner de loadin deve ser realizado aqui
     *
     * @return {HTML}
     */
    _template() {
        return `<img src="img/spinner.gif" id="${this._loaderId}" alt="Loading">`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Loader;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Notification {
    /**
     * Retorna uma instancia da classe Notification
     */
    constructor()
    {
        this._text;
        this._type;
    }

    /**
     * Retorna o texto para a notificacao
     *
     * @return {String}
     */
    get text() {
        return this._text;
    }

    /**
     * Seta o texto para a notificacao
     *
     * @param {String} text
     */
    set text(text) {
        this._text = text;
    }

    /**
     * Retorna o tipo da notificacao
     * Tipos disponiveis - success, danger, info, warning
     *
     * @return {String}
     */
    get type() {
        return this._type;
    }

    /**
     * Seta o tipo da notificacao
     * Tipos disponiveis - success, danger, info, warning
     *
     * @param {String} text
     */
    set type(type) {
        this._type = type;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Notification;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(7);


class NotificationView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* default */] {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = NotificationView;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View {

    /**
     * Retorna uma instancia da classe View
     * Classe base para o template engine
     */
    constructor(element) {
        this._element = document.querySelector(element);
    }

    /**
     * Retorna um erro caso a classe filha nao implemente esse metodo
     * Forca a classe que a extende a ter esse metodo
     */
    template() {
        throw new Error('The template method must be implemented');
    }

    /**
     * Faz o update no DOM de acordo com o template da classe
     * Se a classe filha conter o metodo callback, esse metodo e chamado
     * Serve para acoes apos o html ter sido atualizado
     *
     * @param {Object} model
     * @param {Function} callback
     */
    update(model, callback = null) {
        this._element.innerHTML = this.template(model);

        Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .forEach(iten => iten == 'callback' ? this.callback() :'');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Carousel_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_RequestController_js__ = __webpack_require__(10);



const formRequest = document.querySelector('#js-form-request');
const requestController = new __WEBPACK_IMPORTED_MODULE_1__controllers_RequestController_js__["a" /* default */]();
const fakeSubmit = document.querySelector('.uk-search-input');

$(document).ready(function() {
    new __WEBPACK_IMPORTED_MODULE_0__helpers_Carousel_js__["a" /* default */]('.slide');
});

formRequest.addEventListener('submit', (event) => {
        event.preventDefault();
        requestController.request()
    }
);

fakeSubmit.addEventListener('focus', () => {
    fakeSubmit.blur();
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Carousel {

    /**
     * Retorna uma instancia da classe
     *
     * @param {String} slideClass
     */
    constructor(slideClass)
    {
        this.slide = $(slideClass);
        this.dataClass = this._templateClass();
        this.carousel();
    }

    /**
     * Retorna o numero de imagens no slide
     *
     * @return {Integer}
     */
    get length()
    {
        return this.dataClass.length - 1;
    }

    /**
     * Inicia os slides em sequencia
     *
     * @return void
     */
    carousel()
    {
        let i = 1;
        setInterval(() => {
            i == 0 ? this._backToBegin(this.dataClass[i], 300)
                    : this._fadeImages(this.dataClass[i], i, 300);
            i = (i == 3) ? 0 : i + 1;
        }, 60000);
    }

    /**
     * Faz a animacao de fade em cada passagem no tempo passado
     *
     * @param {String} itenClass
     * @param {Integer} index
     * @param {Integer} time
     * @return void
     */
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

    /**
     * Retorna os slides para a primeira posicao
     *
     * @param {String} itenClass
     * @param {Integer} time
     * @return void
     */
    _backToBegin(itenClass, time)
    {
        this.slide.fadeOut(time);

        setTimeout(() => {
            this.slide.removeClass(this.dataClass[this.length]);
            this.slide.addClass(itenClass);
            this.slide.fadeIn(time);
        },time);
    }

    /**
     * Aqui ficam as classes CSS com os slides
     * Para adicionar novos slides deve apenas adicionar a nova classe CSS
     * com background e colocar o nome da classe nessa lista
     *
     * A ordem fica por seu gosto
     */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Audio_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Notification__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_NotificationView__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Download_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_DownloadView_js__ = __webpack_require__(16);







class RequestController {
    /**
     * Retorna uma instancia da classe
     */
    constructor()
    {
        // Input com a url
        this._inputUrl = document.querySelector('input[name=url]');

        this._audio = new __WEBPACK_IMPORTED_MODULE_1__services_Audio_js__["a" /* default */]();

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notification = new __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_2__views_Notification__["a" /* default */](),
                new __WEBPACK_IMPORTED_MODULE_3__views_NotificationView__["a" /* default */]('#js-message'),
                'text'
        );

        // Adiciona um proxy na classe download para atualizar a DownloadView
        // quando o metodo text for chamado
        this._download = new __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_4__views_Download_js__["a" /* default */](),
                new __WEBPACK_IMPORTED_MODULE_5__views_DownloadView_js__["a" /* default */]('#js-actions'),
                'text'
        );
    }

    /**
     * Faz o request pelo audio
     */
    request()
    {
        this._audio.requestAudio(this._inputUrl.value)
            .then(response => {
                let youtube = response[1];
                let title = response[2];

                response[0].then(() => {
                    this._notification.type = 'success';
                    this._notification.text = 'Sua musica esta pronta para download...';

                    this._download.path = youtube.path;
                    this._download.title = title;
                    this._download.text = `Download`;
                });
            }).catch(err => {
                this._notification.type = 'danger'
                this._notification.text = err
            })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestController;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProxyFactory {

    /**
     * Cria um design pattern Proxy
     *
     * @param {Objec} object
     * @param {Array} props
     * @param {Function} callback
     * @return {Proxy}
     */
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

    /**
     * Retorna se a funcao passada e uma funcao
     *
     * @param {String} func
     * @return {Bool}
     */
    static _isFunction(func) {
        return typeof (func) == typeof(Function);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProxyFactory;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpService_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Youtube_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Loader_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_Url_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_Bind_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_Modal_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_Notification__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_NotificationView__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_WaitForDownload_js__ = __webpack_require__(14);










class Audio {

    /**
     * Retorna uma instancia da classe Audio
     * Essa classe faz o request do video e do audio
     */
    constructor() {

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notification = new __WEBPACK_IMPORTED_MODULE_4__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_6__views_Notification__["a" /* default */](),
                new __WEBPACK_IMPORTED_MODULE_7__views_NotificationView__["a" /* default */]('#js-message'),
                'text'
        );

        this._http    = new __WEBPACK_IMPORTED_MODULE_0__HttpService_js__["a" /* default */]();
        this._loader  = new __WEBPACK_IMPORTED_MODULE_2__views_Loader_js__["a" /* default */]();
        this._youtube = new __WEBPACK_IMPORTED_MODULE_1__models_Youtube_js__["a" /* default */]();
        this._wait    = new __WEBPACK_IMPORTED_MODULE_8__views_WaitForDownload_js__["a" /* default */]('#js-actions');
    }

    /**
     * Faz a requisicao pelo video e pelo audio
     *
     * @param {String} url
     * @return {Promise}
     */
    requestAudio(url) {

        return new Promise((resolve, reject) => {
            let requestParse = this._youtube.requestVideo(url);

            requestParse.then(response => {
                this._loader.stop()

                let attributes = response.reduce((finalArray, array) => finalArray.concat(array), [])

                this._youtube.update(...attributes);

                this._wait.render();

                let urlAudio = __WEBPACK_IMPORTED_MODULE_3__helpers_Url_js__["a" /* default */].convert('/app/Controllers/Api/Audio.php',
                        `title=${this._youtube.title}`,
                        `id=${this._youtube.id}`);
                console.log(this._youtube);
                console.log(attributes);
                resolve([this._http.get(urlAudio), this._youtube, attributes[0]]);
            })
            .catch(err => {
                this._loader.stop();
                this._handleMsg('danger', 'Ooops... Ocorreu um erro.');
                reject(err);
            });
        });

    }

    /**
     * Chama a funcao para setar o tipo e o texto da notificacao
     * Automaticamente atualiza o DOM
     *
     * @param {String} type - success, danger, info, warning
     * @param {String} text
     */
    _handleMsg(type, text) {
        this._notification.type = type;
        this._notification.text = text;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Audio;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Url_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_HttpService_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Modal_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Loader_js__ = __webpack_require__(4);





class Youtube {

    /**
     * Retorna uma instancia da classe Youtube
     */
    constructor() {
        this._id;
        this._title;
        this._http    = new __WEBPACK_IMPORTED_MODULE_1__services_HttpService_js__["a" /* default */]();
        this._loader  = new __WEBPACK_IMPORTED_MODULE_3__views_Loader_js__["a" /* default */]();
    }

    /**
     * Retorna o id do video
     *
     * @return {String} id
     */
    get id() {
        return this._id;
    }

    /**
     * Retorna o titulo do video
     *
     * @return {String} title
     */
    get title() {
        return this._title;
    }

    /**
     * Retorna o caminho onde o video esta armazenado
     *
     * @return {String} path
     */
    get path() {
        return `app/Controllers/Api/uploads/${this._title}.mp3`;
    }

    /**
     * Atualiza o DOM com o frame do video
     *
     * @param {String} title
     * @param {String} id
     * @return void
     */
    update(title, id) {
        this._title = title.replace(/\s/g, '_');
        this._id = id;

        let frame = document.querySelector('#js-youtube');
        frame.innerHTML = this._template(this._id);

        $(function() {
            $('iframe[src*="www.youtube.com"]').each(function() {
                $(this).css('max-width', '100%');
                UIkit.responsiveElement(this);
            });
        });
    }

    /**
     * Faz o parse na url buscando o titulo e o id do video
     *
     * @param {String} url
     * @return {Promise}
     */
    requestVideo(url) {
        let urlParse = __WEBPACK_IMPORTED_MODULE_0__helpers_Url_js__["a" /* default */].convert('/app/Controllers/Api/Parse.php', `url=${url}`);

        return this._http.get(urlParse,
                    {
                        onBeforeSend: () => {
                            __WEBPACK_IMPORTED_MODULE_2__views_Modal_js__["a" /* default */].close();
                            this._loader.load();
                        }
                    });
    }

    /**
     * TODO -> Youtube API
     * Template com o frame do video
     * Qualquer mudanca no html do frame do video deve ser realizada aqui
     *
     * @param {String} id
     * @return {HTML}
     */
    _template(id) {
        return `<div class="video-frame">
                    <iframe id="ytplayer" type="text/html" width="640" height="360" src="http://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" uk-responsive/>
                </div>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Youtube;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class WaitForDownload {

    /**
     * Retorna uma instancia da classe WaitForDownload
     */
    constructor(element) {
        this._element = document.querySelector(element);
    }

    /**
     * Renderiza o html com o template
     */
    render() {
        this._element.innerHTML = this.template();
    }

    /**
     * Template para o botao de loading enquanto o audio esta sendo resolvido
     * Qualquer alteracao no botao deve ser realizado aqui
     *
     * @return {HTML}
     */
    template() {
        return `
            <button class="uk-button uk-button-secondary">
                <div uk-spinner></div>
            </button>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WaitForDownload;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Download {

    /**
     * Retorna uma nova instancia de Download
     */
    constructor() {
        this._text;
        this._path;
        this._title;
    }

    /**
     * Seta o texto para o botao de download
     *
     * @param {String} text
     */
    set text(text) {
        this._text = `${text} ${this._title}`;
    }

    /**
     * Seta o caminho para download do audio
     *
     * @param {String} title
     */
    set path(path) {
        this._path = path;
    }

    /**
     * Seta o titulo para o botao de Download
     *
     * @param {String} title
     */
    set title(title) {
        this._title = title;
    }

    /**
     * Retorna o texto
     *
     * @return {String} text
     */
    get text() {
        return this._text;
    }

    /**
     * Retorna o caminho para download do audio
     *
     * @return {String} path
     */
    get path() {
        return this._path;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Download;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(7);


class DownloadView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* default */] {

    /**
     * Retorna uma nova instancia de DownloadView
     * Recebe um elemento como param que sera usado no construtor da class pai
     *
     * @param {String} element
     */
    constructor(element) {
        super(element);
    }

    /**
     * Template para o botao de download
     * Qualquer alteracao no botao de download devera ser feita aqui
     *
     * @param {Object} model
     * @return {HTML}
     */
    template(model) {
        return `
            <a href="${model.path}" class="uk-button uk-button-secondary js-download-audio" download>${model.text}</a>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DownloadView;



/***/ })
/******/ ]);