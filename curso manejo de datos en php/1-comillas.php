<?php 

echo 'Un texto de una línea
varias línas
comilla simple \' backslash \\ continuar con más texto
$variable <br>';

$name = 'Andrés';
echo "Mi nombre es $name <br>";

$courses = [
    'backend' => [
        'PHP',
        'Laravel',
        'Python'
    ]	
];

class User {
    public $name = 'Andrés';
}

$user = new User;

echo "$user->name quiere aprender {$courses['backend'][0]}"; 

echo '<br>';

$teacher = 'italo';
$italo = 'Profesor de PHP';

echo "$teacher es ${$teacher} <br>";


function getTeacher(){
    return 'teacher';
}

$teacher = 'Italo';

echo "{${getTeacher()}} enseña PHP <br>";


$nombre = "Pedro";
$$nombre = "Hola soy Pedro";

echo $Pedro;

echo '<br>';

echo $$nombre;