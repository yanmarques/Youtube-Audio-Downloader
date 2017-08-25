<?php

namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use LinkPreview\LinkPreview;
use LinkPreview\Model\VideoLink;

class YoutubePreview {

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
    public function preview()
    {
        $linkPreview = new LinkPreview($this->request['url']);

        $parsed = $linkPreview->getParsed();

        $attr = [];

        foreach ($parsed as $parserName => $link) {

            $attr[] = $link->getTitle() . PHP_EOL;

            if ($link instanceof VideoLink) {
                $attr[] = $link->getVideoId() . PHP_EOL;
            }
        }

        return json_encode([$attr]);
    }
}
