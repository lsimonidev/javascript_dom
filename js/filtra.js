var campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);

campoFiltro.addEventListener("input", function () {
    let filtro = this.value;

    let pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(paciente => {
        let tdNome = paciente.querySelector(".info-nome");
        
        let regEx = RegExp(this.value, "i");

        if(!regEx.test(tdNome.textContent)){
            paciente.classList.add("hidden");
        } else {
            paciente.classList.remove("hidden");
        }

    });
});
