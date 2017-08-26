export default class Carousel {

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
