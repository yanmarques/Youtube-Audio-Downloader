<?php
namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use App\Controllers\Api\YoutubePreview;

// Instancia a classe AudioController para fazer a requisicao dos atributos
// da url do video
$youtubePreview = new YoutubePreview($_GET);
$response = $youtubePreview->preview();

header('Content-Type: application/json');
echo $response;
