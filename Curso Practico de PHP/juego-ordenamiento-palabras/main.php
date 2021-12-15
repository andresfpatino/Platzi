<?php 

$words = array("sol", "luna", "cielo", "estrellas", "lluvia");


$form = "<form action='analisis.php'>";

// Desordenamos las palabras con str_shuffle
for ($i = 0; $i < count($words); $i++) { 
    $form .= "La palabra: " . str_shuffle($words[$i]) . " " . 
    "<input type='text' name='palabra". $i ."'>" . 
    "<br>";
}

$button = "<button type='submit'> Enviar </button>";
$endForm = "</form>";

print $form . $button . $endForm;