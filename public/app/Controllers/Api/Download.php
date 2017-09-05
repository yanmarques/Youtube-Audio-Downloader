<?php

namespace App\Controllers\Api;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use App\Interfaces\ApiRequests;

class Download implements ApiRequests {

    /**
     * Nome do arquivo que deseja baixar
     */
    private $file;

    /**
     * Titulo para baixar o arquivo
     */
    private $title;

    function __construct($title, $file)
    {
        $this->title = $this->resolveTitle($title);
        $this->file = $file;
    }

    /**
     * Faz o download do arquivo
     */
    public function request()
    {
        $fileInfo = $this->resolveFile();

        if (file_exists($fileInfo['filePath'])) {

            $file = fopen($fileInfo['filePath'], 'r');

            if ($file) {

                $this->setHeaders($fileInfo['extension']);

                while( ! feof($file)) {
                    print(@fread($file, 8092));
                    ob_flush();
                    flush();
                }

            } else {
                http_response_code(500);
            }

        } else {
            http_response_code(404);
        }

        fclose($file);
        exit;
    }

    private function resolveTitle($title) {
        return preg_replace('/\s+/', '_', str_replace('"', '', str_replace("'", '', $title)));
    }

    /**
     * Retorna um array com as informacoes do arquivo passado no construtor
     *
     * @return Array
     */
    private function resolveFile()
    {
        $pathParts = pathinfo($this->file);
        $fileName  = $pathParts['basename'];
        $fileExt   = $pathParts['extension'];

        return [
            'filePath' => dirname(dirname(__DIR__)) . '/uploads/' . $this->file,
            'basename' => $fileName,
            'extension' => $fileExt
        ];
    }

    /**
     * Seta os headers do  HTTP response com as informacoes dos arquivo que sera baixado
     *
     * @param string title
     * @param string fileExtension
     */
    private function setHeaders($fileExtension)
    {
        header('Pragma: public');
        header("Expires: -1");
		header("Cache-Control: public, must-revalidate, post-check=0, pre-check=0");
		header("Content-Disposition: attachment; filename=\"$this->title.$fileExtension\"");

       $cTypeDefault = "application/octet-stream";

       $contentTypes = [
               "zip" => "application/zip",
               "mp3" => "audio/mpeg",
               "avi" => "video/x-msvideo"
       ];

       $cType = isset($contentTypes[$fileExtension]) ? $contentTypes[$fileExtension] : $cTypeDefault;

       header("Content-Type: " . $cType);
    }
}
