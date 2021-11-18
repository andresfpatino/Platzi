<?php

// Alterar strings
$text = "pHP es uN LenGUAJE";
echo strtolower($text) . '<br>';  // a minusculas 
echo strtoupper($text) . '<br>';  // a mayusculas
echo ucfirst($text) . '<br>';     // primera letra mayuscula
echo lcfirst($text) . '<br>';     // primera letra minuscula


// Reemplazar strings
$slug = str_replace(' ', '-', $text); // reemplaza espacios por guiones
echo strtolower($slug) . '<br>';

// Modificación de texto
$code = 39;
echo str_pad($code, 8, '#', STR_PAD_LEFT) . '<br>'; // rellenar con # a la izquierda

echo strip_tags($text) . '<br>'; // elimina todas las etiquetas html

$fecha = "Año 2021, día de la programación";
echo strtoupper($fecha) . '<br>'; //monobyte
echo mb_strtoupper($fecha); //multibyte
