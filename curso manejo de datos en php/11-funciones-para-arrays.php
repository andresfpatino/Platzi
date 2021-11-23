<?php 

/*
* sort: Ordena un array.
* rsort: Ordena un array en orden inverso.
* ksort: Ordena un array por clave.
* krsort: Ordena un array por clave en orden inverso.
* array_slice: Extrae una parte de un array.
* array_chunk: Divide un array en fragmentos.
* array_shift: Quita un elemento del principio del array.
* array_pop: Extrae el último elemento del final del array.
* array_unshift: Añadir al inicio de un array uno a más elementos.
* array_push: Inserta uno o más elementos al final de un array.
* array_flip: Intercambia todas las claves de un array con sus valores asociados.
*/


$courses = [
    'backend' =>'PHP', 
    'frontend' => 'Javascript', 
    'framework' => 'Laravel'
];

echo "<pre>";
var_dump(array_flip($courses));
var_dump(array_slice($courses, 1));
var_dump(array_chunk($courses, 1));

$course = array_shift($courses);
$data = array_pop($courses);
print_r($data);

array_unshift($courses, "vuejs", "css");
print_r($courses);
array_push($courses, "vuejs");