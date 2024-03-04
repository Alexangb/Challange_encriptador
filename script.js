function Encriptar() {
  var frase = document.getElementById("texto_cifrado").value.toLowerCase();
  //i =es para que tome letras mayusculas y minusculas
  // g = es para que tome en cuenta toda la linea o la oracion
  // m = que tome en cuenta multiples lineas

  var textoEncriptado = frase.replace(/e/gim, "enter");
  var textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
  var textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
  var textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");

  document.getElementById("texto_desencriptado").innerHTML = textoEncriptado;
  // console.log(textoEncriptado);
}

function Desencriptar() {
  var frase = document.getElementById("texto_cifrado").value.toLowerCase();
  //i =es para que tome letras mayusculas y minusculas
  // g = es para que tome en cuenta toda la linea o la oracion
  // m = que tome en cuenta multiples lineas

  var textoEncriptado = frase.replace(/enter/gim, "e");
  var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
  var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
  var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");

  document.getElementById("texto_desencriptado").innerHTML = textoEncriptado;
 
}

//  function Copiar(){
//     var contenido=document.getElementById("texto_desencriptado");
//     contenido.select();
//         document.execCommand("copy");
//         console.log(contenido);
//  }

function copiarAlPortapapeles(texto_desecriptado) {
  var aux = document.createElement("input");
  aux.setAttribute(
    "value",
    document.getElementById(texto_desecriptado).innerHTML
  );
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  document.getElementById("texto_cifrado").innerHTML = aux;
  
}

