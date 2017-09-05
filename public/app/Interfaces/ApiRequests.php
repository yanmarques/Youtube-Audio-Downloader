<?php
namespace App\Interfaces;

require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';

interface ApiRequests
{

    /**
     * Funcao que deve ser implementado em toda classe Api
     */
    public function request();
}
