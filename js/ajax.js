var btnBuscar = document.querySelector("#buscar-pacientes");

btnBuscar.addEventListener("click", function(){
    console.log("Buscando Pacientes...");
    let request = new XMLHttpRequest();

    request.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //abre a conexão
    request.send(); //envia a requisição criada

    request.addEventListener("load", function(){
        let pacientes = JSON.parse(request.responseText);

        pacientes.forEach(paciente => {
            montaTr(
                paciente.nome, 
                paciente.peso,
                paciente.altura,
                paciente.gordura,
                paciente.imc);
        });
   
    })
})



