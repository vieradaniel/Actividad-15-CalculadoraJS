function sumar() {
    const primerSumando = Number(document.getElementById("primerSumando").value);
    const segundoSumando = Number(document.getElementById("segundoSumando").value);
    const resultado = primerSumando + segundoSumando;
    alert(resultado);
}

function restar() {
    const minuendo = Number(document.getElementById("minuendo").value);
    const sustraendo = Number(document.getElementById("sustraendo").value);
    const resultado = minuendo - sustraendo;
    alert(resultado);
}

function multiplicar(){
    const productoPrimerNumero = Number(document.getElementById("productoPrimerNumero").value);
    const productoSegundoNumero = Number(document.getElementById("productoSegundoNumero").value);
    const resultado = productoPrimerNumero * productoSegundoNumero;
    alert(resultado);
}

function dividir(){
    const dividendo = Number(document.getElementById("dividendo").value);
    const divisor = Number(document.getElementById("divisor").value);
    const resultado = dividendo / divisor;
    alert(resultado);
}