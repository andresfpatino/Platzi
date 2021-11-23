<?php

$frontent = [
	'frontend' => 'javascript'
];

$backend = [
	'backend' => 'php', 
	'framework' => 'laravel'
];

echo "<pre>";
var_dump($frontent + $backend);

# array_merge(); Combina dos o más arrays
$frontent1 = ['javascript'];
$backend1 = ['php', 'laravel'];

echo "<pre>";
var_dump(array_merge($frontent1, $backend1));

echo "<br>";

# array_merge_recursive(); Une dos o más arrays recursivamente
$frontent3 = [
	'a' => 'javascript'
];

$backend3 = [
	'a' => 'php', 
	'b' => 'laravel'
];

echo "<pre>";
var_dump(array_merge_recursive($frontent3, $backend3)); //Esto crea un array "a" donde mete unos elementos y otro "b" que mete los demás


echo "<br>";


# array_combine(); Crea un nuevo array, usando una matriz para las claves y otra para sus valores
$courses = ['javascript', 'php', 'laravel'];
$categories = ['frontend', 'backend', 'framework'];

var_dump(array_combine($categories, $courses));