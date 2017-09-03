<?php

namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use App\Models\Youtube;
use YoutubeDl\YoutubeDl;

class AudioController {

    /**
     * Request com as variaveis
     */
    private $request;

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
        $youtube = new Youtube($this->config(), $this->request["id"]);
        return $youtube->run();
    }

    /**
     * Configuracoes para pegar o audio
     *
     * @return Array
     */
    private function config()
    {
        return [
            'output' => "{$this->request['title']}.%(ext)s"
        ];
    }
}
