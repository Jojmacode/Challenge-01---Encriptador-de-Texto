/*
    "e" => "enter"
    "i" => "imes"
    "a" => "ai"
    "o" => "ober"
    "u" => "ufat"

    *Solo convertir minusculas.
*/
class Encriptador{
    static encriptar(palabra){
        var encriptado = "";
        for(var i = 0; i< palabra.length; i++){
            switch (palabra[i]) {
                case "a":
                    encriptado=encriptado+"ai"
                    break;
                case "e":
                    encriptado=encriptado+"enter"
                    break;
                case "i":
                    encriptado=encriptado+"imes"
                    break;
                case "o":
                    encriptado=encriptado+"ober"
                    break;
                case "u":
                    encriptado=encriptado+"ufat"
                    break;
                default:
                    encriptado=encriptado+palabra[i];
                    break;
            }
        }
        return encriptado;
    }
    static desencriptar(palabra){
        var desencriptado = "";
        for (let i = 0; i < palabra.length; i++) {
            switch (palabra[i]) {
                case "a":
                    if(palabra[i+1]=="i"){
                        desencriptado=desencriptado+"a"
                        i++;
                    }
                    break;
                    
                case "e":
                    if(palabra[i+1]=="n" && palabra[i+2]=="t" && palabra[i+3]=="e" && palabra[i+4]=="r"){
                        desencriptado=desencriptado+"e"
                        i+=4;                    
                    }
                    break;
                    
                case "i":
                    if(palabra[i+1]=="m" && palabra[i+2]=="e" && palabra[i+3]=="s"){
                        desencriptado=desencriptado+"i"
                        i+=3;
                    }
                    break;
                case "o":
                    if(palabra[i+1]=="b" && palabra[i+2]=="e" && palabra[i+3]=="r"){
                        desencriptado=desencriptado+"o"
                        i+=3;
                    }
                    break;
                case "u":
                    if(palabra[i+1]=="f" && palabra[i+2]=="a" && palabra[i+3]=="t"){  
                        desencriptado=desencriptado+"u"
                        i+=3;
                    }
                    break;
                default:
                    desencriptado=desencriptado+palabra[i];
                    break;
            }
        }
        return desencriptado;
    } 
}

(function(){
    const encriptar = document.querySelector(".encriptar");
    const desencriptar = document.querySelector(".desencriptar");
    const text = document.querySelector(".text");
    const noText= document.querySelector(".no-text");
    const mensaje = document.querySelector(".mesage");
    const result = document.querySelector(".result");
    const copy = document.querySelector(".copy");
    encriptar.addEventListener("click", ()=>{
        text.style.display="flex";
        noText.style.display="none";
        result.value=Encriptador.encriptar(mensaje.value);
    });
    desencriptar.addEventListener("click", ()=>{
        text.style.display="flex";
        noText.style.display="none";
        result.value=Encriptador.desencriptar(mensaje.value);
    });
    copy.addEventListener("click", ()=>{
        result.select();
        document.execCommand('copy');
        alert("Texto copiado");
        mensaje.value="";
        result.value="";
        text.style.display="none";
        noText.style.display="block";
    })
})();