//btoa -> Encriptar
//atob -> Desencriptar
prompt("Escribe tu nombre:");

function Encriptar() {
    let texto_original = document.getElementById("texto").value;
    let h1 = document.getElementById("texto_encriptado");

    let texto_encriptado = btoa(texto_original);
    h1.innerHTML = texto_encriptado;

}


function Desencriptar() {
    let texto_original = document.getElementById("texto").value;
    let h1 = document.getElementById("texto_desencriptado");

    let texto_encriptado = atob(texto_original);
    h1.innerHTML = texto_encriptado;

}

function limpiar() {
    let texto_original = document.getElementById("texto").value;
    let a = document.getElementById("texto_encriptado");
    let b = document.getElementById("texto_desencriptado");
    a.innerHTML="";
    b.innerHTML=""
}