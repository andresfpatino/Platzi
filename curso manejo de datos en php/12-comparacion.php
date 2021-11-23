<?php 

/**
 * La comparación en PHP nos permiten crear selecciones de manera dinámica.
*/

$courses = ['PHP','Javascript'];
$wishes = ['PHP','Laravel', 'Vue', 'Javascript'];

echo '<pre>';

/**
 * array_diff($array1, $array2); devuelve todos los elementos
 * que están en el array1 pero no están en el array2
 * lo devuelve en forma de array
 */

echo "<pre>";
//var_dump(array_diff($wishes, $courses));

$arrayA = [1, 2, 3, 4, 5];
$arrayB = [3, 4, 5, 6, 7];

var_dump(array_diff($arrayB, $arrayA));

// array_diff_assoc: valores, key