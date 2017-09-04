<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Youtube Downloader</title>

    <!-- UIkit CSS -->
    <link rel="stylesheet" href="uikit/css/uikit.min.css" />

    <!-- Import css -->
    <link rel="stylesheet" href="css/index.css">

</head>
<body>
    <div class="uk-cover-container platform-body">
        <div class="uk-position-relative">

            <!-- Notificacoes -->
            <div id="js-message"></div>

            <!-- Imagem de fundo -->
            <div class="uk-background-cover uk-background-fixed slide background-img-1 uk-panel"></div>

            <div id="js-loader" class="uk-position-center"></div>

            <!-- Form generico de pesquisa de fundo -->
            <div id ="js-app-seach-input" class="is-active"></div>

            <!-- Frame com video do Youtube -->
            <div id="js-youtube" class="uk-position-medium uk-position-top-center"></div>

            <!-- Acoes do usuario -->
            <div id="js-actions" class="uk-position-medium uk-position-bottom-center"></div>

        </div>

        <section>
            <!-- Heading -->
            <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
                <div>
                    <div class="uk-card uk-card-muted uk-card-body">
                        <h1 class="uk-heading-primary uk-text-capitalize">youtube audio downloader</h1>

                        <p class="uk-text-large">
                            Youtube Audio Downloader is a simple platform where you can download any music from a Youtube video.<br/>
                            You just have to paste the full url of the video on the search form.<br/>
                            Feel free to watch our development on github <a class="uk-margin-small-right uk-icon" target="_blank" href="https://github.com/yanmarques/Youtube-Audio-Downloader" uk-icon="icon: github; ratio: 1.3"></a><br/><br/>

                            Hope U enjoy...
                        </p>

                    </div>
                </div>
            </div>

            <div class="uk-container">
                <div class="uk-grid-large uk-child-width-expand@s" uk-grid>
                    <div>
                        <div class="uk-card uk-card-muted" uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                            <div class="section-content-img uk-background-cover uk-background-muted"
                                style="background-image: url(img/d67qwdtqw6dt.jpeg);"></div>
                        </div>
                    </div>

                    <div>
                        <div class="uk-card uk-card-muted" uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                            <div class="uk-text-left">
                                <h2 class="uk-heading-primary uk-text-capitalize">as simple as wild</h2>
                                <p class="text-content-ident uk-text-small uk-text-break">It's a simple use platform.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="uk-grid-large uk-child-width-expand@s uk-flex-center" uk-grid>
                    <div>
                        <div class="uk-card uk-card-muted" uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                            <div class="uk-text-left">
                                <h2 class="uk-heading-primary uk-text-capitalize">open source</h2>
                                <p class="text-content-ident uk-text-small uk-text-break">Youtube Audio Downloader is a full open source project that is maintened by the GitHub community. Be part of our community or help maintain your best youtube downloader.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="uk-card uk-card-muted" uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                            <div class="section-content-img uk-background-cover uk-background-muted"
                                style="background-image: url(img/e3a70a514e2G.jpeg);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <nav id="footer" class="uk-navbar-container" uk-navbar style="display: contents !important">

            <div class="uk-navbar-left uk-margin-small-left text-medium text-center">
                 <ul class="uk-navbar-nav">
                    <li class="text-footer">
                        <b>
                            <span uk-icon="icon: code;ratio: 1.1"></span>
                        </b>
                        with <span id="heart-icon" uk-icon="icon: heart"></span> by
                        <b>
                            <a class="uk-link-reset" href="https://github.com" target="_blank">GitHub</a>
                        </b>
                    </li>
                </ul>
            </div>

            <div class="uk-navbar-right text-medium text-center">
                <ul class="uk-navbar-nav">
                    <li>
                        <a target="_blank" href="https://github.com/yanmarques/Youtube-Audio-Downloader" class="nav-icon" uk-icon="icon: github; ratio: 1.7"></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/yan-marques-b52185120/" class="nav-icon" uk-icon="icon: linkedin; ratio: 1.7"></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <!-- Modal full com a form de pesquisa -->
    <div id="modal-full" class="uk-modal-full uk-modal" uk-modal>
        <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" uk-height-viewport>
            <button class="uk-modal-close-full" type="button" uk-close></button>
            <form id="js-form-request" class="uk-search uk-search-large">
                <input name="url" class="uk-search-input uk-text-center" type="search" placeholder="https://..." autofocus>
            </form>
        </div>
    </div>

    <!-- jQuery is required -->
    <script src="jquery/jquery.min.js"></script>

    <!-- UIkit JS -->
    <script src="uikit/js/uikit.min.js"></script>
    <script src="uikit/js/uikit-icons.min.js"></script>

    <!-- Import scripts -->
    <script src="js/app.bundle.js"></script>
</body>
</html>
