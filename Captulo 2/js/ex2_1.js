//Cria referencia ao form e ao elemente h3(onde será exibida a resposta):
const frm=document.querySelector("form");
const resp=document.querySelector("h3");
//Cria um "ouvinte" de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit",(e)=>{
    const nome = document.getElementById("inNome").value;   //Obtem o nome digitado no form
    resp.innerHTML=`Olá, ${nome}!`; //Exibe resposta do programa
    e.preventDefault()  //evita envio do form
})