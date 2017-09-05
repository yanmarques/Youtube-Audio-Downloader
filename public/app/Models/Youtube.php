<?php

namespace App\Models;

require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';

use YoutubeDl\YoutubeDl;
use YoutubeDl\Exception\NotFoundException;

class Youtube {

    /**
     * Id do video
     */
    private $id;

    /**
     * Retorna uma instancia da classe YoutubeDL
     *
     * @param Array config
     */
    function __construct($id) {
        $this->id = $id;
        $this->hashName = $this->generateHash();
    }

    /**
     * Executa o comando que faz o request do audio
     * Retorna o nome do arquivo
     *
     * @return String
     */
    public function run()
    {
        // Se arquivo ja existe
        if (file_exists($this->downloadPath() . '/' . $this->hashName . '.mp3')) {
            return $this->hashName . '.mp3';
        }

        $youtubeDl = $this->buildDl();
        $youtubeDl->setDownloadPath($this->downloadPath());

        try {
            $video = $youtubeDl->download($this->getYoutubeUrl());
        } catch(NotFoundException $e) {
            return false;
        } catch(\Exception $e) {
            return false;
        }

        return $video['file']->getFilename();
    }

    /**
     * Instancia a classe para fazer o download do audio
     * Thanks to norkunas's Youtube-dl wrapper for PHP on Github
     *
     * @return YoutubeDl
     */
    private function buildDl()
    {
        return new YoutubeDl($this->resolveConfig());
    }

    /**
     * Gera uma url do youtube
     *
     * @return String
     */
    private function getYoutubeUrl() {
        return "https://www.youtube.com/watch?v={$this->id}";
    }

    /**
     * Caminho para download do arquivo
     *
     * @return String
     */
    private function downloadPath() {
        return dirname(__DIR__) . '/uploads';
    }

    /**
     * Resolve as configuracoes passadas no construtor
     * Retorna as opcoes do comando
     *
     * @return String
     */
    private function resolveConfig()
    {
        $options = [
            'extract-audio' => true,
            'audio-format' => 'mp3',
            'audio-quality' => 0,
            'output' => "{$this->generateHash()}.%(ext)s"
        ];

        return $options;
    }

    /**
     * Gera um hash com o nome do arquivo a ser salvo a partir do ID do video
     *
     * @return String
     */
    private function generateHash() {
        return hash('md5', $this->id);
    }
}
