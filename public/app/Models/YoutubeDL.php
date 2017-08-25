<?php

namespace App\Models;

require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';

class YoutubeDL {

    /**
     * Configuracoes passadas no construtor
     */
    private $config;

    /**
     * Retorna uma instancia da classe YoutubeDL
     *
     * @param Array config
     */
    function __construct($config) {
        $this->config = $config;
    }

    /**
     * Executa o comando que faz o request do audio
     *
     * @return void
     */
    public function run()
    {
        exec($this->buildCmd($this->config));
    }

    /**
     * Constroi o comando de acordo com as configuracoes
     *
     * @return String
     */
    private function buildCmd($config)
    {
        return 'youtube-dl ' . $this->resolveConfig($config);
    }

    /**
     * Resolve as configuracoes passadas no construtor
     * Retorna as opcoes do comando
     *
     * @return String
     */
    private function resolveConfig($config)
    {
        $options = '';

        if (in_array('output', $config)) {
            $options .= ' -o "' . $config['output'] . '" --extract-audio ';
        }

        if (in_array('audio-quality', $config)) {
            $options .= ' --audio-quality ' . $config['audio-quality'];
        }

        if (in_array('audio-format', $config)) {
            $options .= ' --audio-format ' . $config['audio-format'];
        }

        if (in_array('url', $config)) {
            $options .=  ' "' . $config['url'] . '"';
        }

        return $options;
    }
}
