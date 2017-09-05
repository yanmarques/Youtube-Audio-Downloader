<?php

namespace App\Controllers;

require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';

use App\Controllers\Api\Download;

// Instancia da classe Donwload para executar o download do arquivo
$download = new Download($_GET['title'], $_GET['fileName']);
$download->request();
