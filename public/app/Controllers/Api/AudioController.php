<?php

namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use App\Models\YoutubeDL;

class AudioController {

    /**
     * Request com as variaveis
     */
    private $request;

    /**
     * Prefixo padrao do youtube
     */
    private $youtubePrefix = 'https://www.youtube.com/watch?v=';

    function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Faz o download do audio do video do youtube
     *
     * @return void
     */
    public function requestAudio()
    {
        $youtubeDL = new YoutubeDL($this->config());
        $youtubeDL->run();
    }

    /**
     * Gera uma url do youtube
     *
     * @param String id
     * @return String
     */
    private function getUrl()
    {
        return $this->youtubePrefix . $this->request['id'];
    }

    /**
     * Configuracoes para pegar o audio
     *
     * @return Array
     */
    private function config()
    {
        return [
               'audio-format' => 'mp3',
               'audio-quality' => 0,
               'output' => __DIR__ . "/uploads/{$this->request['title']}.%(ext)s",
               'url' => $this->getUrl()
        ];
    }
}
