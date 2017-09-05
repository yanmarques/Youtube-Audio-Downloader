<?php

namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use LinkPreview\LinkPreview;
use LinkPreview\Model\VideoLink;
use App\Interfaces\ApiRequests;

class YoutubePreview implements ApiRequests {

    /**
     * Request com as variaveis
     */
    private $request;

    function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Faz um scrap na url e busca pelo titulo e id do video
     * Retorna o response
     *
     * @return Json
     */
    public function request()
    {
        $linkPreview = new LinkPreview($this->resolveUrl());

        $parsed = $linkPreview->getParsed();

        $attr = [];

        foreach ($parsed as $parserName => $link) {

            $attr['title'] = $link->getTitle() . PHP_EOL;

            if ($link instanceof VideoLink) {
                $attr['id'] = $link->getVideoId() . PHP_EOL;
            }
        }

        if (count($attr) == 0) $attr = false;

        return json_encode($attr);
    }

    /**
     * Resolve a url convertendo para url padrao
     *
     * @return string
     */
    private function resolveUrl() {
        if (preg_match('/m.youtube/', $this->request['url'])) {
            return preg_replace('/m./', 'www.', $this->request['url'], 1);
        }

        return $this->request['url'];
    }
}
