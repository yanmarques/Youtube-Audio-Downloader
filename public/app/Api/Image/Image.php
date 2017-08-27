<?php

namespace App\Api\Image;

require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/vendor/autoload.php';

use App\Api\Image\ImageOptimization;

// Api para comprimir as imagens do slide
// As imagens ja estao todas minificadas e comprimidas
// O uso dessa Api apenas deve ser realizado para novas imagens

// Caminho para as imagens
$path = realpath('../../../img/');

// Variavel com os nomes das imagens
$images = [
    '8d8wksos2i3kwg.jpeg',
    'd67qwdtqw6dt.jpeg',
    'iahe7d78so2l.jpeg',
    'usjwkausj83k.jpeg',
    'e3a70a514e2G.jpeg'
];

// Instancia da classe para otimizacao
$imageOptimization = new ImageOptimization;

// Faz um laco para cada imagem no array e comprime a imagem
foreach ($images as $img) {
    $imageOptimization->compress($path . '/' . $img);
}
