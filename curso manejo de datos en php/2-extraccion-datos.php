<?php 

$data = 'Estudio PHP';
echo $data{0} . '<br>';

$post = 'lorem Pariatur exercitation amet adipisicing minim sit dolor incididunt irure ipsum eiusmod voluptate sint.';
$extract = substr($post, 0, 20);
echo "$extract... [ver más]";

$data = 'Javascript, php, laravel';
$tags = explode(',', $data); // Convertir un string en un array
echo "<pre>";
var_dump($tags);

echo '<br>';

$courses = ['Javascript, PHP, Laravel'];
echo implode(', ', $courses); // Convertir un array en un string

echo '<br>';

$course = "      Curso de PHP";
echo trim($course); // Eliminar espacios en blanco