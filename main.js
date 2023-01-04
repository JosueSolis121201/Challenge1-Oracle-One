let textAreaCopiar = document.getElementById("textAreaCopiar");
textAreaCopiar.style.display="none";
let bttnCopiar = document.getElementById("bttnCopiar");
bttnCopiar.style.display="none";

let nuevoTexto="";

document.getElementById("Encriptar").addEventListener("click", bttnEncriptar);
function bttnEncriptar(){
    textAreaCopiar.style.display="block";
    bttnCopiar.style.display="block";
    document.getElementById("textAreaCopiar").innerHTML = '';
    let textoIngresado = document.getElementById("textAreaIngresar").value;
    //tamaño del string
    for (let i=0;i<textoIngresado.length;i++){
        //recorrer caracter por caracter    
        nuevoTexto+= encriptacion(textoIngresado.charAt(i))
        //si durante el reccorido el caracter es una vocal se remplaza por encriptacion
    }
    console.log(nuevoTexto)
    let textoDescripcion = document.createTextNode(nuevoTexto);
    textAreaCopiar.appendChild(textoDescripcion);
    //!limpiando variable nuevoTexto
    nuevoTexto="";
}
function bttnDesencriptar(){
    textAreaCopiar.style.display="block";
    bttnCopiar.style.display="block";
    document.getElementById("textAreaCopiar").innerHTML = '';
    let textoIngresado = document.getElementById("textAreaIngresar").value;
    let textoDescripcion = document.createTextNode(desencriptar(textoIngresado));
    textAreaCopiar.appendChild(textoDescripcion);
    nuevoTexto="";

}
document.getElementById("desencriptar").addEventListener("click", bttnDesencriptar);
function desencriptar(string){
    let cadena = string;
    
    let posicionA = string.indexOf("ai");
    let posicionE = string.indexOf("enter");
    let posicionI = string.indexOf("imes");
    let posicionO = string.indexOf("ober");
    let posicionU = string.indexOf("ufat");

    //Desencriptando "a"
    while (posicionA >= 0){
        posicionA = cadena.indexOf("ai");
        cadena = cadena.slice(0, posicionA) + "a" + cadena.slice(posicionA + 2);
        posicionA = cadena.indexOf("ai");
    }

    //Desencriptando "e"
    while (posicionE >= 0){
        posicionE = cadena.indexOf("enter");
        cadena = cadena.slice(0, posicionE) + "e" + cadena.slice(posicionE + 5);
        posicionE = cadena.indexOf("enter");
    }

    //Desencriptando "i"
    while (posicionI >= 0){
        posicionI = cadena.indexOf("imes");
        cadena = cadena.slice(0, posicionI) + "i" + cadena.slice(posicionI + 4);
        posicionI = cadena.indexOf("imes");
    }

    //Desencriptando "o"
    while (posicionO >= 0){
        posicionO = cadena.indexOf("ober");
        cadena = cadena.slice(0, posicionO) + "o" + cadena.slice(posicionO + 4);
        posicionO = cadena.indexOf("ober");
    }
    //Desencriptando "u"
    while (posicionU >= 0){
        posicionU = cadena.indexOf("ufat");
        cadena = cadena.slice(0, posicionU) + "u" + cadena.slice(posicionU + 4);
        posicionU = cadena.indexOf("ufat");
    }
    return cadena;
}
function encriptacion(letra){
    switch (letra) {
        case 'a':
          return "ai"
        case 'e':
            return "enter"
        case 'i':
          return "imes"
        case 'o':
            return "ober"
        case 'u':
            return "ufat"
        default:
          return letra
      }
}

bttnCopiar.addEventListener("click", bttnCopiarFunction);
function bttnCopiarFunction(){
    document.getElementById("textAreaCopiar").select();
    document.execCommand("copy")
}






