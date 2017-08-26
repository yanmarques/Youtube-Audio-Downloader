<?php
namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use App\Controllers\Api\AudioController;

// Instancia a classe AudioController para fazer a requisicao do audio
$audioController = new AudioController($_GET);
$audioController->requestAudio();

header('Content-Type: application/json');
echo json_encode(true);
