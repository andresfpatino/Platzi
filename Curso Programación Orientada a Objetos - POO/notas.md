# Resumen POO
- [Resumen POO](#resumen-poo)
- [Introducción <a name="intro"></a>](#introducción-)
  - [1. Por qué aprender programación Orientada a Objetos: POO <a name="clase1"></a>](#1-por-qué-aprender-programación-orientada-a-objetos-poo-)
  - [2. ¿Qué resuelve la programación Orientada a Objetos? <a name="clase2"></a>](#2-qué-resuelve-la-programación-orientada-a-objetos-)
  - [3. Paradigma Orientado a Objetos <a name="clase3"></a>](#3-paradigma-orientado-a-objetos-)
  - [4. Lenguajes Orientados a Objetos <a name="clase4"></a>](#4-lenguajes-orientados-a-objetos-)
  - [5. Diagramas de Modelado <a name="clase6"></a>](#5-diagramas-de-modelado-)
- [Orientación a Objetos](#orientación-a-objetos)
  - [1. Objetos](#1-objetos)
  - [2. Abstracción y Clases](#2-abstracción-y-clases)
  - [3. Modularidad y Clases](#3-modularidad-y-clases)
  - [4. identificación de objetos en un Sistema de Adopciones](#4-identificación-de-objetos-en-un-sistema-de-adopciones)
- [Programación Orientada a Objetos. Análisis](#programación-orientada-a-objetos-análisis)
  - [1. Clases en UML y si sintaxis en código](#1-clases-en-uml-y-si-sintaxis-en-código)
  - [2. Qué es la herencia?](#2-qué-es-la-herencia)


# Introducción <a name="intro"></a>
## 1. Por qué aprender programación Orientada a Objetos: POO <a name="clase1"></a>

La programación orientada a objetos tiene cuatro características principales:

+ **Encapsulamiento**: Quiere decir que oculta datos mediante código.
+ **Abstracción**: Es como se pueden representar los objetos en modo de código.
+ **Herencia**: Es donde una clase nueva se crea a partir de una clase existente.
+ **Polimorfismo**: Se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos.

En este curso, los pasos a seguir será:
+ Analisis de problemas: 
    + Observación
    + Entendimiento
    + Lectura
+ Plasmar
    + Diagramar el analasis
+ Programar
    + Programación del diagrama previo
    + Lenguajes de programación (Sintaxis, keywords)

## 2. ¿Qué resuelve la programación Orientada a Objetos? <a name="clase2"></a>

La programación Orientada a Objetos nace de los problemas creados por la programación estructurada y nos ayuda a resolver cierto problemas como:

+ **Código muy largo:** A medida que un sistema va creciendo y se hace más robusta el código generado se vuelve muy extenso haciéndose difícil de leer, depurar, mantener.

+ **Si algo falla, todo se rompe:** Ya que con la programación estructurada el código se ejecuta secuencialmente al momento de que una de esas líneas fallara todo lo demás deja de funcionar.

+ Difícil de mantener.


## 3. Paradigma Orientado a Objetos <a name="clase3"></a>

+ Surge a partir de problemas que debemos plasmar en código
+ Observamos los problemas en forma de objetos
+ La POO es un paradigma de programación ++Paradigma es la teoria que suministra la base y modelo para resolver problemas.**
+ POO es una forma de pensar para resolver problemas orientándonos en objetos

La paradigma de Programación Orientada a Objetos se compone de 4 elementos:
+ Clases
+ Propiedades
+ Métodos
+ Objetos

Y 4 Pilares:
+ Encapsulamiento
+ Abstracción
+ Herencia
+ Polimorfismo

## 4. Lenguajes Orientados a Objetos <a name="clase4"></a>

**Java:**
+ Orientado a Objetos naturalmente
+ Es muy útilizado en Android
+ Y es usado del lado del servidor o Server Side

**PHP**
+ Lenguaje interpretado
+ Pensado para la Web

**Python**
+ Diseñado para ser fácil de usar
+ Múltiples usos: Web, Server Side, Análisis de Datos, Machine Learning, etc

**Javascript**
+ Lenguaje interpretado
+ Orientado a Objetos pero basado en prototipos
+ Pensado para la Web

-- 

+ C#
+ Ruby
+ Kotlin

## 5. Diagramas de Modelado <a name="clase6"></a>
Nos permiten plasmar de forma gráfica a través de diagramas nuestro análisis. Servirá de intermediario para poder entender el problema y la solución con la orientación a objetos.

* **OMT**:
Object Modeling Techniques. 
Es una metodología para el análisis orientado a 
objetos.
  + Diagrama de clases y objetos

* **UML:** Unified Modeling Language o Lenguaje de Modelado Unificado. 
Tomó las bases y técnicas de OMT unificándolas. Tenemos más opciones de diagramas como lo son:
  + Clases
  + Casos de Uso
  + Objetos
  + Actividades
  + Iteración
  + Estados
  + Implementación


# Orientación a Objetos
## 1. Objetos
- Cuando tengamos un problema lo primero que debemos hacer es **identificar objetos**

Los Objetos son aquellos que tienen propiedades y comportamientos, también serán sustantivos (nombres que identifican cosas).

+ Pueden ser Físicos o Conceptuales
    + Las **Propiedades** también pueden llamarse atributos y estos también serán sustantivos. Algunos atributos o propiedades son nombre, tamaño, forma, estado, etc. Son todas las características del objeto.

    + Los **Comportamientos** serán todas las operaciones que el objeto puede hacer, suelen ser verbos o sustantivos y verbo. Algunos ejemplos pueden ser que el usuario pueda hacer login y logout.

<pre>
Objeto: Perro
Propiedades: nombre, color, raza, altura
Comportamientos: ladrar, comer, dormir, correr
</pre>

## 2. Abstracción y Clases

Una **Clase** es el modelo por el cual nuestros objetos se van a construir y nos van a permitir generar más objetos.

Analizamos Objetos para crear Clases. Las Clases son los modelos sobres los cuales construiremos nuestros objetos.

**Abstracción** es cuando separamos los datos de un objeto para generar un molde.

## 3. Modularidad y Clases
La modularidad va muy relacionada con las clases y es un principio de la Programación Orientado a Objetos y va de la mano con el Diseño Modular que significa dividir un sistema en partes pequeñas y estas serán nuestros módulos pudiendo funcionar de manera independiente.

La **modularidad** de nuestro código nos va a permitir:

+ Reutilizar
+ Evitar colapsos
+ Hacer nuestro código más mantenible
+ Legibilidad
+ Resolución rápida de problemas
+ Una buena práctica es separando las clases en archivos diferentes.

## 4. identificación de objetos en un Sistema de Adopciones

+ Objeto1: perro 
  + atributos:
    + raza
    + tamaño
    + id
    + adoptado
    + disponibilidad
   
+ Objeto2: persona
  + atributos:
    + id
    + telefono
    + correo
    + sexo
    + edad
    + dirección
  + instancia:
    + adoptar   


# Programación Orientada a Objetos. Análisis

## 1. Clases en UML y si sintaxis en código

+ Nombre de clase -> identidad
  + Atributo -> Estado
  + Operación -> Comportamiento


Java: 
<pre>
  class Person {
    String name = "";
    void walk(){}
  }
</pre>

Python: 
<pre>
  class Person:
    name = "";
    def walk():
</pre>

JavaScript: 
<pre>
  Person.prototype.walk = function(){

  }
</pre>

PHP: 
<pre>
  class Person{
    $name = "";
    function walk(){}
  }
</pre>

## 2. Qué es la herencia?

+ La *herencia* nos permite crear nuevas clases a partir de otras, se basa en modelos y conceptos de la vida real. También tenemos una jerarquía de padre e hijo.
+ *Don’t repeat yourself* es una filosofía que promueve la reducción de duplicación en programación, esto nos va a inculcar que no tengamos líneas de código duplicadas. 
+ Toda pieza de información *nunca debería ser duplicada* debido a que incrementa la dificultad en los cambios y evolución
