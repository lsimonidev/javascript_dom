var btnBuscar = document.querySelector("#buscar-pacientes");

btnBuscar.addEventListener("click", function(){
    console.log("Buscando Pacientes...");
    let request = new XMLHttpRequest();

    request.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //abre a conexão
    
    var msgErro = document.querySelector("#erro-ajax");

    request.addEventListener("load", function(){
        if(request.status == 200){
            msgErro.classList.add("hidden");
            let pacientes = JSON.parse(request.responseText);
            pacientes.forEach(paciente => {
                montaTr(
                    paciente.nome, 
                    paciente.peso,
                    paciente.altura,
                    paciente.gordura,
                    paciente.imc);
            });            
        } else {
            msgErro.classList.remove("hidden");
            msgErro.textContent = "ERRO: "+request.status;
        }

        
    })
    request.send(); //envia a requisição criada
})



