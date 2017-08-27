<?php

namespace App\Api\Image;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use Imagick;

class ImageOptimization {

    // Caminho para arquivo o arquivo original
    private $imagick;

    /**
     * Retorna uma instancia da classe ImageOptimization
     */
    function __construct()
    {
        $this->imagick = new Imagick;
    }

    /**
     * Faz a compressao das imagens e atualiza elas no mesmo lugar
     * Se for passado o argumento output, a imagem fica salva no caminho especificado
     *
     * @param String input
     * @param String output
     */
    public function compress($input, $output = null)
    {
        try {
            $this->imagick->readImage($input);

            $this->imagick->setImageResolution(72,72);

            $this->imagick->resampleImage(72,72,imagick::FILTER_UNDEFINED,1);

            $geometry = $this->imagick->getImageGeometry();

            if ($geometry['height'] > 1920 || $geometry['width'] > 1080) {

                $this->imagick->scaleImage(1920, 0);

                if($geometry['height'] > $resizeHeight) {
                    $this->imagick->scaleImage(0, 1080);
                }
            }

            $profiles = $this->imagick->getImageProfiles("icc", true);

            $this->imagick->setImageCompression(Imagick::COMPRESSION_JPEG);

            $this->imagick->setImageCompressionQuality(70);

            $this->imagick->setImageFormat("jpg");

            $this->imagick->stripImage();

            if ( ! empty($profiles))
                $this->imagick->profileImage("icc", $profiles['icc']);

            if ($output) {
                $this->imagick->writeImage($output);
            } else {
                $this->imagick->writeImage($input);
            }

            $this->imagick->clear();
        } catch(ImagickException $e) {
            die($e);
        }
    }
}
