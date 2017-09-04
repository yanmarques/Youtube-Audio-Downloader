import View from './View';

export default class Youtube extends View {

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
    static hide() {
        let container = document.querySelector('#js-youtube');

        ! container.classList.contains('not-active') ? container.classList.add('not-active') :'';
    }

    /**
     * TODO -> Youtube API
     * Template com o frame do video
     * Qualquer mudanca no html do frame do video deve ser realizada aqui
     *
     * @return {HTML}
     */
    template(model) {

        this._element.classList.contains('not-active') ? this._element.classList.remove('not-active') :'';
        return `<div class="video-frame">
                    <iframe id="ytplayer" type="text/html" width="840" height="460" src="http://www.youtube.com/embed/${model.id}?autoplay=1" frameborder="0" uk-responsive/>
                </div>
        `;
    }

}
