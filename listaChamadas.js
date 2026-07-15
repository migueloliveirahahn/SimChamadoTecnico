let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

listarChamados();

function listarChamados(){

let pesquisa = document
.getElementById("pesquisa")
.value
.toLowerCase();

let statusFiltro =
document.getElementById("filtroStatus").value;

let prioridadeFiltro =
document.getElementById("filtroPrioridade").value;

let tabela =
document.getElementById("listaChamados");

tabela.innerHTML="";

chamados.forEach((chamado,index)=>{

if(
!chamado.titulo.toLowerCase().includes(pesquisa)
) return;

if(statusFiltro && chamado.status!=statusFiltro)
return;

if(prioridadeFiltro && chamado.prioridade!=prioridadeFiltro)
return;

let classe="";

switch(chamado.status){

case "Aberto":
classe="aberto";
break;

case "Em andamento":
classe="andamento";
break;

case "Finalizado":
classe="finalizado";
break;

}

tabela.innerHTML+=`

<tr>

<td>${chamado.titulo}</td>

<td>${chamado.descricao}</td>

<td>${chamado.prioridade}</td>

<td class="${classe}">${chamado.status}</td>

<td>

<button
class="statusBtn"
onclick="mudarStatus(${index})">

<i class="fa-solid fa-repeat"></i>

</button>

<button
class="excluir"
onclick="excluirChamado(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

function mudarStatus(index){

let status = chamados[index].status;

if(status=="Aberto"){

chamados[index].status="Em andamento";

}else if(status=="Em andamento"){

chamados[index].status="Finalizado";

}else{

chamados[index].status="Aberto";

}

localStorage.setItem("chamados",
JSON.stringify(chamados));

listarChamados();

}

function excluirChamado(index){

if(confirm("Deseja excluir este chamado?")){

chamados.splice(index,1);

localStorage.setItem("chamados",
JSON.stringify(chamados));

listarChamados();

}

}