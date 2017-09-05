<?php
namespace App\Controllers;

require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';

use App\Controllers\Api\Search;

$search = new Search($_GET['query']);
$response = $search->request();

header('Content-type', 'application/json');
echo json_encode($response);
