
function calcularMediaAritmetica(lista){

    const promedio = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioFinal = promedio / lista.length;

    return promedioFinal;
}