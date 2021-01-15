//Adiciona paciente à lista
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //previne o comportamento padrao do botão (recarregar página)
    var form = document.querySelector("#form-paciente");
    let paciente = criaPaciente(form);
    
    let erros = validaPaciente(paciente);

    document.querySelector(".lista-erros").innerHTML = "";
    if(erros.length > 0){
        erros.forEach(erro => mensagemErro(erro));
        return;
    }

    montaTr(
    paciente.nome, 
    paciente.peso,
    paciente.altura,
    paciente.gordura,
    paciente.imc);

    //limpa formulario
    form.reset();
    document.querySelector(".lista-erros").innerHTML = "";
});

function criaPaciente(form){
    let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
}
    console.log(paciente.imc);
    return paciente;
}

function montaTr(nome, peso, altura,gordura,imc) {

    let trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");
    
    trPaciente.appendChild(montaTd(nome,"info-nome"));
    trPaciente.appendChild(montaTd(peso,"info-peso"));
    trPaciente.appendChild(montaTd(altura,"info-altura"));
    trPaciente.appendChild(montaTd(gordura,"info-gordura"));
    trPaciente.appendChild(montaTd(imc,"info-imc"));

    //Adiciona nova linha à tabela Pacientes
    document.querySelector("#tabela-pacientes").appendChild(trPaciente);
}

function montaTd(valor, classe){
    let td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    let erros = [];

    if(!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");
    if(paciente.nome.length == 0) erros.push("Favor preencher o campo nome")
    if(paciente.peso.length == 0) erros.push("Favor preencher o campo peso")
    if(paciente.altura.length == 0) erros.push("Favor preencher o campo altura")
    if(paciente.gordura.length == 0) erros.push("Favor preencher o campo gordura")
    
    return erros;
}

function mensagemErro(erro){
    let li = document.createElement("li");
    li.classList.add("campo-invalido");
    li.textContent = erro;

    document.querySelector(".lista-erros").appendChild(li);
}