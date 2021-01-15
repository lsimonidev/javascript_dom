var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutri Aparecida";

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

pacientes.forEach(function(paciente){
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let imc = calculaImc(peso,altura);  

    if(!validaPeso(peso)){
        paciente.querySelector(".info-imc").textContent = "peso inválido";
        paciente.classList.add("paciente-invalido");
    } else if(!validaAltura(altura)){
        paciente.querySelector(".info-imc").textContent = "altura inválida";
        paciente.classList.add("paciente-invalido");
    } else {
        paciente.querySelector(".info-imc").textContent = imc;
    }
});

// Calcula o IMC
function calculaImc(peso, altura){
    let imc = peso / (altura * altura); 
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 400){
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 3.0){
        return false;
    } else {
        return true;
    }
}