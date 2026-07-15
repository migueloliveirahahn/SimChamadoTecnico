const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

let total = chamados.length;
let abertos = 0;
let andamento = 0;
let finalizados = 0;

chamados.forEach(chamado => {

    if(chamado.status === "Aberto"){
        abertos++;
    }

    if(chamado.status === "Em andamento"){
        andamento++;
    }

    if(chamado.status === "Finalizado"){
        finalizados++;
    }

});

document.getElementById("total").textContent = total;
document.getElementById("abertos").textContent = abertos;
document.getElementById("andamento").textContent = andamento;
document.getElementById("finalizados").textContent = finalizados;

new Chart(document.getElementById("graficoChamados"),{

type:"bar",

data:{

labels:["Aberto","Em andamento","Finalizado"],

datasets:[{

label:"Quantidade",

data:[abertos,andamento,finalizados],

backgroundColor:[

"#dc3545",

"#ffc107",

"#28a745"

]

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

}

}

});