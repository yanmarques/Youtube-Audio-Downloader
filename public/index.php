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
    <div class="uk-position-relative">

        <!-- Notificacoes -->
        <div id="js-message"></div>

        <!-- Imagem de fundo -->
        <div class="uk-background-cover uk-background-fixed slide background-img-1 uk-panel"></div>

        <div id="js-loader" class="uk-position-center"></div>

        <!-- Form generico de pesquisa de fundo -->
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

        <!-- Form generico de pesquisa de fundo -->
        <div id="js-youtube" class="uk-position-medium uk-position-top-center"></div>

        <div id="js-actions" class="uk-position-medium uk-position-center"></div>
    </div>

    <div class="uk-position-relative">

        <!-- Heading -->
        <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h1 class="uk-heading-primary">Youtube Audio Downloader</h1>

                    <p>
                        Youtube Audio Downloader is a simple platform where you can download any music from a Youtube video.<br/>
                        You just have to paste the full url of the video on the search form.<br/>
                        Feel free to watch our development on github <a class="uk-margin-small-right uk-icon" target="_blank" href="https://github.com/yanmarques/Youtube-Audio-Downloader" uk-icon="icon: github; ratio: 1.3"></a><br/><br/>

                        Hope U enjoy...
                    </p>

                </div>
            </div>
        </div>
    </div>

    <nav id="footer" class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center uk-text-small uk-text-center uk-text-bottom">
            <ul class="uk-navbar-nav">
                <li class="text-footer">
                    Code with <span id="heart-icon" uk-icon="icon: heart"></span> by Github.com
                </li>
            </ul>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-margin-large-right">
                <li class="uk-active">
                    <a target="_blank" href="https://github.com/yanmarques/Youtube-Audio-Downloader" class="nav-icon" uk-icon="icon: github; ratio: 1.7"></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/yan-marques-b52185120/" class="nav-icon" uk-icon="icon: linkedin; ratio: 1.7"></a>
                </li>
            </ul>
        </div>
    </nav>

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
