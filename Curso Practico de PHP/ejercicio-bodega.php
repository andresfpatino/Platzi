<?php

$edades = array(4,7,6,'undefined age');

foreach($edades as $edad) {
  switch($edad) {
    case $edad > 0 && $edad < 5 :
      echo"al ser menor de 5 años van a la parte inferior de la bodega \n";
    break;
    case $edad >= 5 && $edad <= 7 :
      echo "al tener entre 5 y 7 años sus juguetes se almacenan en la parte media de la bodega \n";
    break;
    case $edad > 7 && $edad < 100 :
      echo "al ser mayor de 7 años sus juguetes se almacenan en la parte superior de la bodega \n";
    break;
    default:
      echo "Al no tener registrada su edad sus juguetes se guardaran en el almacen de al lado \n";
    break;
  }
}