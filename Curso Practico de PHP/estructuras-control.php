<?php


// If / else
$valorA = 10;

if ($valorA == 10) {
    echo "El valor es igual que 10";
} else {
    echo "No es igual a 10";
}


// While / do while
$i = 0;
while ($i <= 10) {
    echo $i++;
}


do {
    echo $i++;
} while ($i <= 10);


// For / forEach
$arr = array(1, 2, 3, 4);
for($i = 0; $i < 4; $i++) {
    echo $arr[$i];
}

foreach ($arr as $valor) {
    echo $valor;
}

// Switch 
$valorA = 3;

switch($valorA){
    case 1:
        echo "El valor es 1";
        break;
    case 2:
        echo "El valor es 2";
        break;
    case 3 :
        echo "El valor es 3";
        break;
    default:
        echo "El valor no es 1, 2 o 3";
        break;
}