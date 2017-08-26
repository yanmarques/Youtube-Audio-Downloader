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
    <div class="uk-cover-container">
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

            <!-- Frame com video do Youtube -->
            <div id="js-youtube" class="uk-position-medium uk-position-top-center"></div>

            <!-- Acoes do usuario -->
            <div id="js-actions" class="uk-position-medium uk-position-bottom-center"></div>

        </div>

        <?php include 'views/content.php' ?>

        <?php include 'views/footer.php' ?>
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
