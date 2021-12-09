# Curso Práctico de PHP
- [Curso Práctico de PHP](#curso-práctico-de-php)
- [1. Qué es la consola de comandos:](#1-qué-es-la-consola-de-comandos)
- [2. Operadores lógicos](#2-operadores-lógicos)
- [3. Operadores aritméticos](#3-operadores-aritméticos)
- [4. Estructuras de control](#4-estructuras-de-control)
- [5. ¿Qué son las funciones?](#5-qué-son-las-funciones)
  

# 1. Qué es la consola de comandos:
La consola de comando, es un programa que recibe ciertas palabras / códigos clave, y es interpretado para que suceda algo.
En este caso vamos a trabajar con la terminal integrada en VScode.

# 2. Operadores lógicos
Operadores lógicos: *and, or, xor, not*

La precedencia es que primero se va a comparar los valores de la izquierda, antes que los de la derecha si se usa *&& o ||*.

# 3. Operadores aritméticos
Son aquellos que nos permiten trabajar con operaciones básicas. Suma, resta, multiplicación, división, módulo y potenciación.

+ Suma: Para sumar dos valores usamos el signo +.
+ Resta: Para restar dos valores usamos el signo -.
+ Multiplicación: Para multiplicar dos valores usamos el signo *.
+ División: Para dividir dos valores usamos el signo /.
+ Incremento: Sirve para incrementar un valor numérico en 1, usamos el operador ++. Ejemplo: $value++, sumará 1 a $value.
+ Decremento: Sirve para disminuir un valor numérico en 1, usamos el operador --. Ejemplo: $value--, restará 1 a $value.
+ Módulo: Sirve para saber el resto de una división entera, usamos el operador %. Ejemplo: 10 % 3; da como resultado 1. Un uso muy polular de este operador es para saber si un número es par o impar

# 4. Estructuras de control

+ *if* La estructura de control if permite la ejecución condicional de fragmentos de código.
+ *else* Sirve para ejecutar una sentencia cuando otra no se cumple. else extiende una sentencia if, y se ejecuta cuando ésta es false.
+ *while* Es el tipo más sencillo de loop en PHP. Se ejecutan las sentencias dentro del while siempre y cuando se evalúen como true. El valor de la expresión se comprueba cada vez al inicio del loop, y la ejecución no se detendrá hasta que finalice la iteración (cada vez que PHP ejecuta las sentencias en un loop es una iteración). Si la expresión while se evalúa como false, las sentencias no se ejecutarán ni siquiera una vez. También es posible agrupar varias instrucciones while dentro de una.
+ *do-while* Muy similares a los loops while, simplemente aquí la expresión para el loop se verifica al final en lugar de al principio, esto garantiza que el código se ejecute por lo menos la primera vez.
+ *for*
    + Las expresiones o conjunto de expresiones van separadas por punto y coma ; y sólo hay 3.
    + La primera expresión, $i = 1, se ejecuta una vez incondicionalmente al comienzo del bucle.
    + La segunda expresión, $i <= 10, es una condición, si es true, se ejecutará la tercera expresión.
    + La tercera expresión, $i++, es la acción a realizar si se cumple la segunda expresión.
  
    <pre>
        for ($i = 1; $i <= 10; $i++) {
            echo $i;
        } 
    </pre>
+ *foreach* foreach permite una forma fácil de iterar sobre arrays u objetos.

Cuando foreach inicia su ejecución, el puntero apunta directamente al primer elemento del array, por lo que no es necesario llamar a la función reset() antes que un loop foreach. Es recomendable no cambiar el puntero dentro del loop.

+ *Switch* La sentencia switch es similar a una serie de sentencias IF en la misma expresión. En muchas ocasiones, es posible que se quiera comparar la misma variable (o expresión) con muchos valores diferentes, y ejecutar una parte de código distinta dependiendo de a que valor es igual. Para esto es exactamente la expresión switch.

# 5. ¿Qué son las funciones?
Una función es un conjunto de instrucciones a la que podemos recurrir siempre que queramos. Éstas pueden recibir parámetros y realizar todo tipo de tareas, ya sean complejas o sencillas.