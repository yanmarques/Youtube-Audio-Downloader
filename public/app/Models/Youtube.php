<?php

namespace App\Models;

require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';

use YoutubeDl\YoutubeDl;
use YoutubeDl\Exception\NotFoundException;

class Youtube {

    /**
     * Configuracoes passadas no construtor
     */
    private $config;

    private $id;

    /**
     * Retorna uma instancia da classe YoutubeDL
     *
     * @param Array config
     */
    function __construct($config, $id) {
        $this->config = $config;
        $this->id = $id;
    }

    /**
     * Executa o comando que faz o request do audio
     *
     * @return void
     */
    public function run()
    {
        $youtubeDl = $this->buildDl();
        $youtubeDl->setDownloadPath($this->downloadPath());

        try {
            $youtubeDl->download($this->getYoutubeUrl());
        } catch(NotFoundException $e) {
            return false;
        } catch(\Exception $e) {
            return false;
        }

        return true;
    }

    /**
     * Instancia a classe para fazer o download do audio
     * Thanks to norkunas's Youtube-dl wrapper for PHP on Github
     *
     * @return String
     */
    private function buildDl()
    {
        return new YoutubeDl($this->resolveConfig());
    }

    /**
     * Gera uma url do youtube
     *
     * @param String id
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
     * @return String
     */
    private function resolveConfig()
    {
        $options = [
            'extract-audio' => true,
            'audio-format' => 'mp3',
            'audio-quality' => 0,
            'output' => '%(title)s.%(ext)s'
        ];

        if (isset($this->config['output'])) {
            $options['output'] = $this->config['output'];
        }

        return $options;
    }
}
