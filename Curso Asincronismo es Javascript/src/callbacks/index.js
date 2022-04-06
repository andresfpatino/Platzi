
/* Definición estructura Callback */

// Ejemplo 1
function suma(num1, num2){
    return num1 + num2;
}

function calcular(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calcular(5, 5, suma));


// Ejemplo 2
function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);