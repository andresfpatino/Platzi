// Cuadrado
console.group("Cuadrado");

    function perimetroCuadrado(lado){
        return lado * 4;
    }
    console.log( `Los lados del cuadraro miden: ${perimetroCuadrado(56)}cm` );

    function areaCuadrado(lado){
        return lado * lado;
    }
    console.log(`El área del cuadrado es: ${areaCuadrado(56)}cmˆ2`); 

console.groupEnd();


// Triángulo
console.group("Triángulo");

    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    }
    console.log(`El perímetro del triangulo es: ${perimetroTriangulo(6, 6, 4)}cm`);

    function areaTriangulo(base, altura){
        return (base * altura) / 2;
    }
    console.log(`El área del triangulo es: ${areaTriangulo(4, 5.5)}cmˆ2`);

console.groupEnd();


// Circulo
console.group("Circulo");

    // Diametro
    function diametroCirculo(radio) {
        return radio * 2;
    } 
    console.log(`El diametro del circulo es: ${diametroCirculo(4)}cm`);

    // PI
    const PI = Math.PI;

    // Circunferencia
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    } 
    console.log(`El perimetro del circulo es: ${perimetroCirculo(20)}cm`);

    // Area
    function areaCirculo(radio){
        return (radio * radio) * PI;
    } 
    console.log(`El area del circulo es: ${areaCirculo(5)}cmˆ2`);

console.groupEnd();