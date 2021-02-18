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