//Criação de  Referencia ao form e aos elementos H3 com seus respctivos Ids:
const frm=document.querySelector("form");
const valorTotal=document.getElementById("#OutValorTotal");
//criação de um ouvinte de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit",(e)=>{
    //Obtendo conteudo dos campos de entrada
    const valorQuilo=Number(document.getElementById("IntValorQuilo").value);
    const consumo=Number(document.getElementById("InPeso").value);                  
    //calculo
    const total = parseFloat((valorQuilo/1000)*consumo); 
    //exibição das informações de saída.
    valorTotal.innerText=`Valor a pagar R$ ${total.toFixed(2)}`;   
    //evitando envio do form
    e.preventDefault();     
})

