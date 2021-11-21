const peso = document.getElementById('weight');
const altura = document.getElementById ('altura');
const btn = document.getElementById ('btnCalcular');
const botonRes = document.getElementById ('btn-reset')

const resultado = document.getElementById ('resultado');

const calcularImc=()=>{
    const peso =document.getElementById("weight").value     
    const altura =document.getElementById("altura").value/100     
    const resultado=document.getElementById("resultado")      
    if(peso !== "" && altura !== "" )
    {      
        // formula imc= peso/(altura*altura)   
        let imc= Math.round(peso/(altura*altura)) //mat.round es para redondear el resultado
        let mensaje=""    
             
        if(imc<18){
            mensaje="Bajo Peso"
            document.getElementById("resultado").style.background = "yellow";
            document.getElementById("resultado").style.width = "11em"; 
            document.getElementById("resultado").style.height = "3em";
            
        }
            else if(imc<24){ 
              mensaje="peso normal" 
              document.getElementById("resultado").style.background = "green";
              document.getElementById("resultado").style.width = "11em"; 
              document.getElementById("resultado").style.height = "3em";    
             }
            else if(imc<30){
            mensaje="usted esta encima del peso ideal"
              document.getElementById("resultado").style.background = "orange";
              document.getElementById("resultado").style.width = "11em"; 
              document.getElementById("resultado").style.height = "3em"; 
           }
            else if(imc<35){          
                mensaje="obesisdad tipo I"
                document.getElementById("resultado").style.background = "red";
              document.getElementById("resultado").style.width = "11em"; 
              document.getElementById("resultado").style.height = "3em"; 
            }
            else if(imc<40){         
                    mensaje= "obesidsad del tipo II"
                    document.getElementById("resultado").style.background = "red";
                    document.getElementById("resultado").style.width = "11em"; 
                    document.getElementById("resultado").style.height = "3em"; 
            }
            else{
            mensaje="obesidad tipo III"
            document.getElementById("resultado").style.background = "red";
            document.getElementById("resultado").style.width = "11em"; 
            document.getElementById("resultado").style.height = "3em"; 
            }

    resultado.textContent=`Su IMC es de ${imc}. ${mensaje}`
    } 
    else{
       resultado.textContent=    "Por favor, llene los campos"
       //resultado.classList.toggle('')
    }


}



btn.addEventListener('click',calcularImc)
