<?php
crearArbol(10);

function espacios($esp){
    for( $i=1; $i <= $esp; $i++) {
        echo '<span style="color:red">_<span/>';
    }
}

function asterisco($ast){
    for( $i=1; $i <= $ast; $i++){
        echo '<span style="color:green">*<span/>';
    }
}

function salto(){
    echo '<br/>';
}

function crearArbol($dato){
    $altura = $dato;
    $incremento = 1;
    $vacio = $altura;
    
    $i = 0;

    while($i < $altura){
        espacios($vacio);
        asterisco($incremento);
        espacios($vacio);

        $incremento = $incremento + 2;
        $vacio = $vacio - 1;
        salto();
        
        $i++; 
    }
}
