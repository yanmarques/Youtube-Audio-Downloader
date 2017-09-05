<?php

namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use \GuzzleHttp\Client;
use App\Interfaces\ApiRequests;

class Search implements ApiRequests {

    /**
     * Instancia da classe Client
     */
    private $client;

    /**
     * Query para pesquisar na url do YouTube
     */
    private $query;

    /**
     * Retorna uma instancia da classe
     *
     * @param string query
     */
    function __construct($query) {
        $this->client = new Client();
        $this->query = $query;
    }

    /**
     * Procura pelos videos atraves da query passado no construtor
     *
     * @return string
     */
    public function request() {

        $request = $this->getRequest();

        if ($request->getStatusCode() !== 200) {
            throw new Exception("Error Processing Request");
        }

        return $request->getBody()->getContents();
    }

    /**
     * Retorna uma instancia de Client com um request do tipo GET na url de busca do YouTube
     * com a query passada no construtor
     *
     * @return \GuzzleHttp\Client
     */
    private function getRequest() {
        return $this->client->request('GET', $this->generateUrlSearch());
    }

    /**
     * Gera a url de busca do YouTube com a query
     *
     * @return string
     */
    private function generateUrlSearch() {
        return "https://www.youtube.com/results?search_query={$this->encodeQuery()}";
    }

    /**
     * Transforma a query passada em uma query valida para a url
     *
     * @return string
     */
    private function encodeQuery() {
        return htmlentities(urlencode($this->query));
    }
}
