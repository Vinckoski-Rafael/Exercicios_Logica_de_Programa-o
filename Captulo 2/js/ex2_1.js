//Cria referencia ao form e ao elemente h3(onde será exibida a resposta):
const frm=document.querySelector("form");
const resp=document.querySelector("h3");
//Cria um "ouvinte" de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit",(e)=>{
    //Obtem o nome digitado no form
    const nome = document.getElementById("inNome").value;   
    //Exibe resposta do programa
    resp.innerHTML=`Olá, ${nome}!`; 
    //evita envio do form
    e.preventDefault()  
})