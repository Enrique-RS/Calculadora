function inserir(tecla) {
    let num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= num + tecla;
}
function limpar() {
    document.getElementById('resultado').innerHTML = "";
}
function voltar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "...";
    }
}