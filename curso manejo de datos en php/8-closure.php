<?php 

// Una función anónima se usa en una variable que requiere logica.

function greet(Closure $lang, $name){
    return $lang($name);
}

$es = function ($name){
    return "Hola, $name";
};

$en = function ($name){
    return "Hello, $name";
};

echo greet($es, 'Andrés');
