let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

mostrarUsuarios();

function salvarUsuario(){

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let indice = document.getElementById("indice").value;

if(nome=="" || email=="" || senha==""){

alert("Preencha todos os campos");

return;

}

let usuario={

nome,
email,
senha

};

if(indice==""){

usuarios.push(usuario);

}else{

usuarios[indice]=usuario;

document.getElementById("indice").value="";

}

localStorage.setItem("usuarios",JSON.stringify(usuarios));

document.getElementById("nome").value="";
document.getElementById("email").value="";
document.getElementById("senha").value="";

mostrarUsuarios();

}

function mostrarUsuarios(){

let tabela=document.getElementById("tabelaUsuarios");

tabela.innerHTML="";

usuarios.forEach((usuario,index)=>{

tabela.innerHTML+=`

<tr>

<td>${usuario.nome}</td>

<td>${usuario.email}</td>

<td class="acoes">

<button class="editar" onclick="editar(${index})">

<i class="fa-solid fa-pen"></i>

</button>

<button class="excluir" onclick="excluir(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

function excluir(index){

if(confirm("Deseja excluir este usuário?")){

usuarios.splice(index,1);

localStorage.setItem("usuarios",JSON.stringify(usuarios));

mostrarUsuarios();

}

}

function editar(index){

document.getElementById("nome").value=usuarios[index].nome;
document.getElementById("email").value=usuarios[index].email;
document.getElementById("senha").value=usuarios[index].senha;

document.getElementById("indice").value=index;

}

function pesquisar(){

let texto=document.getElementById("pesquisa").value.toLowerCase();

let linhas=document.querySelectorAll("#tabelaUsuarios tr");

linhas.forEach(linha=>{

let nome=linha.children[0].textContent.toLowerCase();

linha.style.display=nome.includes(texto) ? "" : "none";

});

}