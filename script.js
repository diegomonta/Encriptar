function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    
    mostrarResultado(textoEncriptado);
  }
  
  function desencriptar() {
    let texto = document.getElementById("inputText").value;
    let textoDesencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    
    mostrarResultado(textoDesencriptado);
  }
  
  function mostrarResultado(texto) {
    let outputText = document.getElementById("outputText");
    let desencriptarMensaje = document.querySelector(".desencriptar__mensaje");
    let desencriptarResultado = document.querySelector(".desencriptar__resultado");
  
    if (texto) {
      outputText.value = texto;
      desencriptarMensaje.style.display = "none";
      desencriptarResultado.style.display = "flex";
    } else {
      desencriptarMensaje.style.display = "flex";
      desencriptarResultado.style.display = "none";
    }
  }
  
  function copiar() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
  }
  