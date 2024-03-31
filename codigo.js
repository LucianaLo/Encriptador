let s = document.getElementById("parrafo");
function encriptar(){

    let tA = document.getElementById("texto-encriptado").value;
    let vueltas = 0;
    let letras = ""; 

    while(vueltas != tA.length) {
        if (tA[vueltas] == "a") {
            letras += "ai";
        }     
        else if (tA[vueltas] == "e") {
            letras += "enter";
        }   
        else if (tA[vueltas] == "o") {
            letras += "ober";
        }  
        else if (tA[vueltas] == "i") {
            letras += "imes";
        }  
        else if (tA[vueltas] == "u") {
            letras += "ufat";
        }  
        else{
            letras += tA[vueltas];
        }   
        vueltas = vueltas +1;
    } 
    s.innerText = letras;

    let muneco = document.querySelector(".munecoImg").style.display = "none";
    let respuesta = document.querySelector(".p").style.display = "flex"

}



function desencriptar() {
    let tA = document.getElementById("texto-encriptado").value;
    let vueltas = 0;
    let letras = ""; 

    while(vueltas != tA.length) {
        if (tA[vueltas] == "a") {
            letras += "a";
            vueltas += 1;
         }     
         else if (tA[vueltas] == "e") {
            letras += "e";
            vueltas += 4;
         }   
        else if (tA[vueltas] == "o") {
            letras += "o";
            vueltas += 3;
        }  
        else if (tA[vueltas] == "i") {
            letras += "i";
            vueltas += 3;
         }  
        else if (tA[vueltas] == "u") {
            letras += "u";
            vueltas += 3;
        }  
        else{
            letras += tA[vueltas];
        }   
        vueltas = vueltas +1;
        
    }
    s.innerText = letras;

    let muneco = document.querySelector(".munecoImg").style.display = "none";
    let respuesta = document.querySelector(".p").style.display = "flex";

    }
    
function copiar() {
    let parrafo = document.getElementById("parrafo").innerText;
    navigator.clipboard.writeText(parrafo);
    alert("el texto ha sido copiado");
}