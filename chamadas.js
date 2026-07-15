let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

mostrarChamados();

function salvarChamado(){

let titulo=document.getElementById("titulo").value;
let descricao=document.getElementById("descricao").value;
let prioridade=document.getElementById("prioridade").value;
let status=document.getElementById("status").value;
let indice=document.getElementById("indice").value;

if(titulo=="" || descricao==""){

alert("Preencha todos os campos.");

return;

}

let chamado={

titulo,
descricao,
prioridade,
status

};

if(indice==""){

chamados.push(chamado);

}else{

chamados[indice]=chamado;

document.getElementById("indice").value="";

}

localStorage.setItem("chamados",JSON.stringify(chamados));

limpar();

mostrarChamados();

}

function mostrarChamados(){

let tabela=document.getElementById("tabelaChamados");

tabela.innerHTML="";

chamados.forEach((chamado,index)=>{

let corStatus="";

switch(chamado.status){

case "Aberto":
corStatus="red";
break;

case "Em andamento":
corStatus="orange";
break;

case "Finalizado":
corStatus="lime";
break;

}

tabela.innerHTML+=`

<tr>

<td>${chamado.titulo}</td>

<td>${chamado.prioridade}</td>

<td style="color:${corStatus}">
${chamado.status}
</td>

<td class="acoes">

<button class="editar"
onclick="editar(${index})">

<i class="fa-solid fa-pen"></i>

</button>

<button class="excluir"
onclick="excluir(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

function editar(index){

document.getElementById("titulo").value=chamados[index].titulo;

document.getElementById("descricao").value=chamados[index].descricao;

document.getElementById("prioridade").value=chamados[index].prioridade;

document.getElementById("status").value=chamados[index].status;

document.getElementById("indice").value=index;

}

function excluir(index){

if(confirm("Excluir chamado?")){

chamados.splice(index,1);

localStorage.setItem("chamados",JSON.stringify(chamados));

mostrarChamados();

}

}

function limpar(){

document.getElementById("titulo").value="";
document.getElementById("descricao").value="";
document.getElementById("prioridade").value="Baixa";
document.getElementById("status").value="Aberto";

}