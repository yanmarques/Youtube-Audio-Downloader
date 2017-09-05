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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Url {

    /**
     * Converte os argumentos passados em uma url valida
     *
     * @param {String} path
     * @param {Object} parameters
     * @return {String}
     */
    static convert(path, parameters)
    {

        if (typeof parameters !== 'object') {
            throw new Error(`The second argument must be an Object. ${typeof parameters} given.`);
        }

        let params = [];

        for (let key in parameters) {
            params.push(encodeURI(`${key}=${parameters[key]}`));
        }

        return window.location.origin
                + path
                + '?' + params.join('&');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Url;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpService__ = __webpack_require__(4);


class RequestServices {

    /**
     * Retorna uma instancia da classe.
     * Classe que functiona como uma interface
     */
    constructor() {
        this._http = new __WEBPACK_IMPORTED_MODULE_0__HttpService__["a" /* default */];
    }

    /**
     * Metodo a ser implementado nas classes que a extendem
     */
    get _path() {
        throw new Error("The getter 'path' must be implemented as a class method.");
    }

    /**
     * Metodo a ser implementado nas classes que a extendem
     */
    request() {
        throw new Error("The method 'request' must be implemented as a class method.");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestServices;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(0);


class App extends __WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */] {

    /**
     * Retorna uma instancia da class App que extende View
     * Recebe um elemento como param que sera usado no construtor da class pai
     *
     * @param {HTML} element
     */
    constructor(element) {
        super(element);
        this._element = document.querySelector(element);
    }

    /**
     * Esconde o elemento
     */
    static hide() {
        let element = document.querySelector('#js-app-seach-input');

        if (element.classList.contains('is-active')) {
            element.classList.remove('is-active');
        }
    }

    /**
     * Mostra o elemento
     */
    static active() {
        let element = document.querySelector('#js-app-seach-input');

        if ( ! element.classList.contains('is-active')) {
            element.classList.add('is-active');
        }
    }

    /**
     * Template para o input de pesquisa
     * Qualquer alteracao no input devera ser feita aqui
     *
     * @return {HTML}
     */
    template() {
        return `
            <div id="form-center" class="uk-position-center">
                <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <form class="uk-search uk-search-default form-search">
                                <span uk-search-icon></span>
                                <input class="uk-search-input" type="search" placeholder="Search..." href="#modal-full" uk-toggle>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        `;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Request__ = __webpack_require__(13);


class HttpService {

    /**
     * Faz uma requisicao do tipo GET na url
     * Retorna uma promise
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
    get(url, config = {}) {

        config.hasOwnProperty('onBeforeSend') ?
            config.onBeforeSend() : '';

        if (fetch) {
            return fetch(url).then(response => new __WEBPACK_IMPORTED_MODULE_0__models_Request__["a" /* default */](response.status, response.json(), response))
                .catch(error => error);
        }

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            xhr.onreadystatechange = () => {
                if (this._onSuccess(xhr)) {
                    if (this._isSuccess(xhr)) {
                        resolve(new __WEBPACK_IMPORTED_MODULE_0__models_Request__["a" /* default */](xhr.status, JSON.parse(xhr.responseText), xhr));
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
     * Envia uma requisicao do tipo POST na url
     * Retorna uma promise
     *
     * @param {String} url
     * @param {Array} config
     * @return {Promise}
     */
    post(url, config) {

        if ( ! this._validateCfg(config)) throw new Error('Missing arguments on configuration');

        config.hasOwnProperty('onBeforeSend') ?
            config.onBeforeSend() : '';

        if (fetch) {
            return fetch(url, this._requestInfo(config));
        }

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);

            xhr = this._getHeadersConfig(config, xhr, setRequestHeader);

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
    get protocolSuccess() {
        let protocol = [];

        for (let i = 200; i < 300; i++) {
            protocol.push(i);
        }

        return protocol;
    }

    /**
     * Retorna as informacoes e headers da requisicao do tipo POST
     *
     * @param {Object} config
     * @return {Object}
     */
    _requestInfo(config) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        myHeaders = this._getHeadersConfig(config, myHeaders, append);

        return {
            method : 'POST',
            headers : myHeaders,
            mode : 'cors'
        };
    }

    /**
     * Itera por todos os headers do config e seta no object pelo callback
     *
     * @return {Object}
     */
    _getHeadersConfig(config, object, callback) {
        if ( ! config.hasOwnProperty('headers')) {
            throw new Error('The configuration must have an key headers.');
        }

        for (let key in config.headers) {
            object.callback(key, config.headers[key]);
        }

        return object;
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
    _onSuccess(xhr) {
        return xhr.readyState == 4;
    }

    /**
     * Retorna um booleano com a verificacao do estado da resposta
     * Se a resposta do request foi um protocolo de sucesso retorna true
     *
     * @param {XMLHttpRequest} xhr
     * @return {Bool}
     */
    _isSuccess(xhr) {
        return this._protocolSuccess.includes(xhr.status);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HttpService;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(0);


class WaitForDownload extends __WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */] {

    /**
     * Retorna uma instancia da classe WaitForDownload
     */
    constructor(element) {
        super(element);
        this._element = document.querySelector(element);
    }

    /**
     * Esconde botao de download carregando
     */
    static hide() {
        let container = document.querySelector('#js-actions');

        ! container.classList.contains('not-active') ? container.classList.add('not-active') :'';
    }

    /**
     * Template para o botao de loading enquanto o audio esta sendo resolvido
     * Qualquer alteracao no botao deve ser realizado aqui
     *
     * @return {HTML}
     */
    template() {

        this._element.classList.contains('not-active') ? this._element.classList.remove('not-active') :'';

        return `
            <div class="button-loading">
                <button class="uk-button uk-button-secondary">
                    <div uk-spinner></div>
                </button>
            </div>

            <div class="button-search-down">
                <a class="uk-button uk-button-secondary" href="#modal-full" uk-toggle>
                    <span uk-icon="icon: search; ratio: 1.1" style="color: #fff;"></span>
                    Search for another music...
                </a>
            </div>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WaitForDownload;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_App__ = __webpack_require__(3);


class Loader{

    /** TODO => refactor

    /**
     * Retorna uma instancia da classe Loader
     * Classe para mostrar spinner quando estiver fazendo alguma requisicao longa
     */
    constructor() {
        // Container onde ira ficar o loader
        this._container = document.querySelector('#js-loader');
        this._body = document.querySelector('body');
        this._actions = $('#js-actions');
    }

    /**
     * Inicia o carregamento com o spinner
     */
    load() {
        __WEBPACK_IMPORTED_MODULE_0__views_App__["a" /* default */].hide();
        this._body.classList.add(this._classBackgroundLoading);
        this._container.innerHTML = this._template();
    }

    /**
     * Finaliza o carregamento
     */
    stop() {
        __WEBPACK_IMPORTED_MODULE_0__views_App__["a" /* default */].active();
        this._actions.show();
        this._body.classList.remove(this._classBackgroundLoading);
        this._body.removeAttribute("style");
        document.querySelector('html').removeAttribute("class");
        document.querySelector('#' + this._loaderId).remove();
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
        return 'loader-gif';
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Carousel_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_RequestController_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_App__ = __webpack_require__(3);




let app = new __WEBPACK_IMPORTED_MODULE_2__views_App__["a" /* default */]('#js-app-seach-input');
app.update();

const formRequest = document.querySelector('#js-form-request');
const requestController = new __WEBPACK_IMPORTED_MODULE_1__controllers_RequestController_js__["a" /* default */]();
const fakeSubmit = document.querySelector('.uk-search-input');
const searchResult = document.querySelector('#js-search-videos');

$(document).ready(function() {
    new __WEBPACK_IMPORTED_MODULE_0__helpers_Carousel_js__["a" /* default */]('.slide');
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


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Audio_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Parse_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Notification__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Notification__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Download_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_Download_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Youtube__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_Youtube__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_SearchVideos__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_Modal__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_SearchVideos__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_SearchVideos__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_WaitForDownload__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_Loader__ = __webpack_require__(6);

















class RequestController {
    /**
     * Retorna uma instancia da classe
     */
    constructor()
    {
        // Input com a url
        this._inputUrl = document.querySelector('input[name=url]');

        this._audio = new __WEBPACK_IMPORTED_MODULE_1__services_Audio_js__["a" /* default */]();
        this._parse = new __WEBPACK_IMPORTED_MODULE_2__services_Parse_js__["a" /* default */]();
        this._searchVideos = new __WEBPACK_IMPORTED_MODULE_10__services_SearchVideos__["a" /* default */]();
        this._loader = new __WEBPACK_IMPORTED_MODULE_15__views_Loader__["a" /* default */]();

        this._searchModel = new __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__["a" /* default */](
            new __WEBPACK_IMPORTED_MODULE_12__models_SearchVideos__["a" /* default */](),
            new __WEBPACK_IMPORTED_MODULE_13__views_SearchVideos__["a" /* default */]('#js-search-videos'),
            'content'
        );

        // Adiciona um proxy na classe Youtube para atualizar a YoutubeView
        this._youtube = new __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__["a" /* default */](
            new __WEBPACK_IMPORTED_MODULE_8__models_Youtube__["a" /* default */](),
            new __WEBPACK_IMPORTED_MODULE_9__views_Youtube__["a" /* default */]('#js-youtube'),
            'id'
        );

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notificationSuccess = new __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_3__models_Notification__["a" /* default */]('success'),
                new __WEBPACK_IMPORTED_MODULE_4__views_Notification__["a" /* default */]('#js-message'),
                'text'
        );

        // Adiciona um proxy na classe notification para atualizar a notificationview
        this._notificationDanger = new __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_3__models_Notification__["a" /* default */]('danger'),
                new __WEBPACK_IMPORTED_MODULE_4__views_Notification__["a" /* default */]('#js-message'),
                'text'
        );

        // Adiciona um proxy na classe download para atualizar a DownloadView
        // quando o metodo text for chamado
        this._download = new __WEBPACK_IMPORTED_MODULE_0__helpers_Bind_js__["a" /* default */](
                new __WEBPACK_IMPORTED_MODULE_5__models_Download_js__["a" /* default */](),
                new __WEBPACK_IMPORTED_MODULE_6__views_Download_js__["a" /* default */]('#js-actions'),
                'fileName'
        );
    }

    /**
     * Faz o request para download do audio
     */
    request(id = null) {

        const result = id === null ? this._inputUrl.value : __WEBPACK_IMPORTED_MODULE_8__models_Youtube__["a" /* default */].generateUrl(id);

        let isUrl = __WEBPACK_IMPORTED_MODULE_8__models_Youtube__["a" /* default */].isUrl(result);

        this._resetInput();
        __WEBPACK_IMPORTED_MODULE_11__views_Modal__["a" /* default */].close();

        if (isUrl) {
            return this.youtubeVideo(result);
        }

        __WEBPACK_IMPORTED_MODULE_9__views_Youtube__["a" /* default */].remove();
        __WEBPACK_IMPORTED_MODULE_14__views_WaitForDownload__["a" /* default */].hide();

        this._searchVideos.request(result)
            .then(request => request.getResponse(response => {
                this._loader.stop();
                this._searchModel.content = response;
            }));
    }

    /**
     *  Faz o request para download do audio
     */
    youtubeVideo(inputUrl) {
        __WEBPACK_IMPORTED_MODULE_7__views_App__["a" /* default */].hide();
        __WEBPACK_IMPORTED_MODULE_13__views_SearchVideos__["a" /* default */].remove();

        this._youtube.id = inputUrl;

        this._parse.request(inputUrl)
            .then(request => request.getResponse(response => {
                    if ( !response) throw new Error('Ooops... A url inserida não é válida.');

                    this._youtube.title = response.title;

                    return this._audio.request(response.id);
                })
            )
            .then(request => request.getResponse(response => {
                if ( !response) throw new Error('Ocorreu um erro ao fazer o download. Por favor, contate o desenvolvedor.');

                this._download.title = this._youtube.title;

                this._download.fileName = response;

                this._handleSuccessMsg();
            }))
            .catch(error => this._handleErrorsMsg(error.message));
    }

    /**
     * Resolve os erros recebidos pela promise lancando uma modal com o texto
     * Automaticamente atualiza o DOM
     *
     * @param {String} msg
     */
    _handleErrorsMsg(msg) {
        __WEBPACK_IMPORTED_MODULE_9__views_Youtube__["a" /* default */].hide();
        __WEBPACK_IMPORTED_MODULE_14__views_WaitForDownload__["a" /* default */].hide();
        __WEBPACK_IMPORTED_MODULE_7__views_App__["a" /* default */].toggle();
        this._notificationDanger.text = msg;
    }

    /**
     * Seta a notificacao com a mensagem de sucesso
     * Automaticamente atualiza o DOM
     */
    _handleSuccessMsg() {
        this._notificationSuccess.text = 'Seu download está pronto...';
    }

    /**
     * Limpa o campo de busca
     */
    _resetInput() {
        this._inputUrl.value = '';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestController;



/***/ }),
/* 10 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RequestServices__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_WaitForDownload_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_Url__ = __webpack_require__(1);




class Audio extends __WEBPACK_IMPORTED_MODULE_0__RequestServices__["a" /* default */] {

    /**
     * Retorna uma instancia da classe Audio
     * Essa classe faz o request do video e do audio
     */
    constructor() {
        super();
        this._wait = new __WEBPACK_IMPORTED_MODULE_1__views_WaitForDownload_js__["a" /* default */]('#js-actions');
    }

    /**
     * Url para fazer download do audio
     */
    get _path() {
        return '/app/Controllers/AudioController.php';
    }

    /**
     * Faz a requisicao pelo video e pelo audio
     *
     * @param {String} id
     * @return {Promise}
     */
    request(id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__helpers_Url__["a" /* default */].convert(this._path, {
                'id' : id
            }), {
                onBeforeSend: () => this._wait.update()
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Audio;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Request {

    /**
     * Retorna uma instancia da classe Request
     */
    constructor(status, response, request = null) {
        this._status = status;
        this._response = response;
        this._request = request;
    }

    /**
     * Retorna o status do request
     *
     * @return {Integer}
     */
    get status() {
        return this._status;
    }

    /**
     * Retorna o corpo do request
     *
     * @return {Promise} {Object}
     */
    get request() {
        return this._request;
    }

    /**
     * Retorna o callback
     */
    getResponse(callback) {

        if (typeof callback !== typeof Function) {
            throw new Error(`The argument must be a Function. ${typeof callback} given.`);
        }

        if (this._response instanceof Promise) {
            return this._response.then(response => callback(response));
        }

        return callback(this._response);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Request;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RequestServices__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Url__ = __webpack_require__(1);



class Parse extends __WEBPACK_IMPORTED_MODULE_0__RequestServices__["a" /* default */] {

    /**
     * Retorna uma instancia de Parse
     */
    constructor() {
        super();
    }

    /**
     * Url para fazer o parse da Url inserida buscando o id e o titulo
     */
    get _path() {
        return '/app/Controllers/ParseController.php';
    }

    /**
     * Faz o request retornando o uma promise com o id e o titulo da url inserida
     *
     * @param {String} url
     * @return {Promise}
     */
    request(url) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_1__helpers_Url__["a" /* default */].convert(this._path, {
            'url' : url
        }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Parse;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Notification {
    /**
     * Retorna uma instancia da classe Notification
     */
    constructor(type)
    {
        this._type = type;
        this._text;
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Notification;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(0);


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

    /**
     * Executado no metodo de update
     */
    callback() {
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Url__ = __webpack_require__(1);


class Download {

    /**
     * Retorna uma nova instancia de Download
     */
    constructor() {
        this._title;
        this._fileName;
    }

    /**
     * Retorna o title do audio
     *
     * @return {String}
     */
    get title() {
        return this._title;
    }

    /**
     * Retorna o nome do arquivo salvo no servidor
     *
     * @return {String}
     */
    get fileName() {
        return this._fileName;
    }

    /**
     * Retorna o caminho para fazer o download
     *
     * @return {String} path
     */
    get action() {
        return '/app/Controllers/DownloadController.php';
    }

    /**
     * Seta o nome do arquivo que foi salvo com o hash
     *
     * @param {String} fileName
     */
    set fileName(fileName) {
        this._fileName = fileName;
    }

    /**
     * Seta o titlo da musica
     *
     * @param {String} title
     */
    set title(title) {
        this._title = title;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Download;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(0);


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
            <div>
                <form action="${model.action}" method="GET">

                    <input type="hidden" name="title" value="${model.title}">
                    <input type="hidden" name="fileName" value="${model.fileName}">

                    <button type="submit" id="btn-download" class="uk-button uk-button-secondary js-download-audio">
                        <span uk-icon="icon: download; ratio: 1.3" style="color: #fff;"></span>
                        Download ${model.title}
                    </button>
                </fom>
            </div>

            <div class="button-search-down">
                <a class="uk-button uk-button-secondary" href="#modal-full" uk-toggle>
                    <span uk-icon="icon: search; ratio: 1.1" style="color: #fff;"></span>
                    Search for another music...
                </a>
            </div>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DownloadView;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Youtube {

    /**
     * Retorna uma instancia da classe Youtube
     */
    constructor() {
        this._id;
        this._title;
        this._query;
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
     * Seta o id a partir de uma url do Youtube
     */
    set id(url) {
        let video_id = url.split('v=')[1];
        this._id = video_id;
    }

    /**
     * Seta o titulo do video
     */
    set title(title) {
        this._title = title;
    }

    /**
     * Verifica se a url passada e uma Url do youtube valida
     *
     * @return {Boolean}
     */
    static isUrl(url) {
        return /^https:\/\/(?:www\.|m\.)?youtube\.com\/watch\?v=.+(&\S*)?$/.test(url);
    }

    /**
     * Gera uma url valida a partir do ID do video
     *
     * @param {String} id
     * @return {String}
     */
    static generateUrl(id) {
        return `https://www.youtube.com/watch?v=${id}`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Youtube;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(0);


class Youtube extends __WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */] {

    /**
     * Retorna uma instancia da classe Youtube
     */
    constructor(element) {
        super(element);
        this._element = document.querySelector(element);
    }

    /**
     * Funcao chamada no metodo update
     * Redimensiona o tamanho do video de acordo com a resolucao
     */
    callback() {
        $(function() {
            $('iframe[src*="www.youtube.com"]').each(function() {
                $(this).css('max-width', '100%');
            });
        });
    }

    /**
     * Esconde o video do Youtube
     */
    static remove() {
        let container = document.querySelector('#js-youtube');

        container.innerHTML = '';
    }

    /**
     * TODO -> Youtube API
     * Template com o frame do video
     * Qualquer mudanca no html do frame do video deve ser realizada aqui
     *
     * @return {HTML}
     */
    template(model) {

        return `<div class="video-frame">
                    <iframe id="ytplayer" type="text/html" width="840" height="460" src="https://www.youtube.com/embed/${model.id}?autoplay=1" frameborder="0" uk-responsive/>
                </div>
        `;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Youtube;



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpService__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Url__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequestServices__ = __webpack_require__(2);





class SearchVideos extends __WEBPACK_IMPORTED_MODULE_3__RequestServices__["a" /* default */] {

    /**
     * Retorna uma instancia de Parse
     */
    constructor() {
        this._http = new __WEBPACK_IMPORTED_MODULE_0__HttpService__["a" /* default */]();
        this.loader = new __WEBPACK_IMPORTED_MODULE_2__views_Loader__["a" /* default */]();
    }

    /**
     * Url para fazer o parse da Url inserida buscando o pelo HTML com os videos do YouTube
     */
    get _path() {
        return '/app/Controllers/SearchController.php';
    }

    /**
     * Faz o request retornando o uma promise com o HTML do resultado da query
     *
     * @param {String} query
     * @return {Promise}
     */
    request(query) {
        this.loader.load();
        return this._http.get(__WEBPACK_IMPORTED_MODULE_1__helpers_Url__["a" /* default */].convert(this._path, {
            'query' : query
        }));
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchVideos;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Modal {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SearchVideos {

    /**
     * Retorna uma instancia da classe SearchVideos
     */
    constructor() {
        this._html;
        this._parser = new DOMParser();

        // Numero maximo de videos renderizados no DOM
        this._maxOfVideos = 10;
    }

    /**
     * Retorna o HTML resolvido com os dados da musica
     *
     * @return {Array}
     */
    get html() {
        return this._resolveHtml();
    }

    /**
     * Seta o conteudo do HTML em forma de String
     *
     * @param {String} content
     */
    set content(content) {
        this._html = content;
    }

    /**
     * Resolve o HTML retornando os elementos criados
     *
     * @return {Array}
     */
    _resolveHtml() {
        if (this._html === undefined) {
            throw new Error('Any html document was set. First insert a html document.');
        }

        let html = this._html;

        // Transforma a String em um documento HTML
        let parsedHtml = this._parser.parseFromString(html, 'text/html');

        // Busca pela div onde se encontra os dados do video
        // Pode quebrar caso o Youtube atualize o DOM e mude a classe
        let content = parsedHtml.querySelectorAll('div.yt-lockup');

        html = [];

        if (content.length === 0) return false;

        let length = content.length >= this._maxOfVideos ? this._maxOfVideos : content.length;

        for (let i = 0; i < length; i++) {
            let contentParsed = this._parser.parseFromString(content[i].outerHTML, 'text/html');

            let id  = contentParsed.querySelector('div.yt-lockup-thumbnail > a');
            let img = contentParsed.querySelector('img');
            let title = contentParsed.querySelector('div.yt-lockup-content > h3.yt-lockup-title > a');
            let description = contentParsed.querySelector('div.yt-lockup-content > div.yt-lockup-description');

            if (id !== null) {
                id = id.getAttribute('href').split('v=')[1];
            }

            html.push({
                'id' : id,
                'img' : img,
                'title' : title,
                'description' : description
            });
        }

        html = html.filter(this._filterId);

        return this._createElements(html);
    }

    /**
     * Filtra os itens retirando aqueles com ID nulo, undefined, ou que sao uma playlist
     *
     * @return {Boolean}
     */
    _filterId(item) {
        if (item.id === undefined || item.id === null) {
            return false;
        }

        // Se for uma playlist
        if (/^\w+(&\S*)?&list=/.test(item.id)) {
            return false;
        }

        return true;
    }

    /**
     * Cria os elementos de titulo, imagem e descricao
     *
     * @param {Array}
     * @return {Array}
     */
    _createElements(html) {
        return html.map(item => {
            let src = item.img.getAttribute('src');

            if (item.img.hasAttribute('data-thumb')) {
                src = item.img.getAttribute('data-thumb');
            }

            item.img = this._imageTemplate(src, item.title.textContent);
            item.title = this._titleTemplate(item.id, item.title.textContent);
            item.description = item.description !== null ? item.description.textContent : '';

            return item;
        });
    }

    /**
     * Template para criar a imagem, qualquer alteracao na imagem deve ser realizado aqui
     *
     * @param {String} src
     * @param {String} title
     * @return {HTML}
     */
    _imageTemplate(src, title) {
        return  `<img title="${title}" alt="${title}" src="${src}" width="420" height="312">`;
    }

    /**
     * Template para criar o titulo, qualquer alteracao na imagem deve ser realizado aqui
     *
     * @param {String} id
     * @param {String} title
     * @return {HTML}
     */
    _titleTemplate(id, title) {
        return `<a class="js-video-result" video-id=${id}>${title}</a>`
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchVideos;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(0);


class SearchVideos extends __WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */] {

    /**
     * Retorna uma nova instancia de SearchVideos
     * Recebe um elemento como param que sera usado no construtor da class pai
     *
     * @param {String} element
     */
    constructor(element) {
        super(element);
        this._element = document.querySelector(element);
    }

    /**
     * Remove o elemento do DOM
     */
    static remove() {
        let container = document.querySelector('#js-search-videos');

        container.innerHTML = '';
    }

    /**
     * Template para a notificacao
     * Qualquer alteracao no resultado da pesquisa devera ser feita aqui
     *
     * @param {Object} model
     * @return {HTML}
     */
    template(model) {

        // Se nao retornou nenhum video
        if ( !model.html) {
            return `
                <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
                    <div>
                        <div class="uk-card uk-card-muted uk-card-body">
                            <h1 class="uk-heading-primary">Oops... Nenhum video foi encontrado!</h1>
                        </div>
                    </div>
                </div>
            `;
        }

        return model.html.map(item =>
            `<div class="uk-grid-large uk-child-width-expand@s" uk-grid>
                <div>
                    <div class="uk-card uk-card-muted">
                        <h3 class="uk-card-title text-center">${item.title}</h3>
                        <a class="js-video-result section-content-img" video-id="${item.id}">
                            ${item.img}
                        </a>
                    </div>
                </div>

                <div>
                    <div class="uk-card uk-card-default">
                        <div class="uk-text-justify uk-text-large">
                            ${item.description}
                        </div>
                    </div>
                </div>
            </div>`
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchVideos;



/***/ })
/******/ ]);