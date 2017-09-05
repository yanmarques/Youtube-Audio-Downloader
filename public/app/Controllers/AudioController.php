<?php
namespace App\Controllers;

require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';

use App\Controllers\Api\Audio;

// Instancia a classe AudioController para fazer a requisicao do audio
$audio = new Audio($_GET);
$response = $audio->request();

header('Content-Type: application/json');
echo json_encode($response);
