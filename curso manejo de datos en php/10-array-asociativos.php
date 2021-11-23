<?php 

// Los asociativos son una forma de almacenar datos en un array mediante un key y un value

$courses = [
    'Frontend' => 'Javascript',
    'Backend' => 'PHP', 
    'Framework' => 'Laravel'
];

// foreach ($courses as $key => $value) {
//     echo " $key : $value <br>";
// }

function upper($course, $key) {
    echo strtoupper($course) . ": $key <br>";
}

array_walk($courses, 'upper');

/*
* array_key_exists('Frontend', $courses); // Comprueba que exista el key en el array
* in_array('Javascript', $courses); // Comprueba si un valor existe en el array
* array_keys($courses); // Devuelve los keys del array
* array_values($courses); // Devuelve los values del array
* array_search('Laravel'); // Busca un valor en el array y devuelve su key
*/