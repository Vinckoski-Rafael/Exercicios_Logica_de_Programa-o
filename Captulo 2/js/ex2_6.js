//Criação de  Referencia ao form e aos elementos H3 com seus respctivos Ids:
let frm=document.querySelector("form");
let resp1=document.getElementById("OutValorTotal");
//criação de um ouvinte de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    //Obtendo conteudo dos campos de entrada
    let valorPorTempo= Number(document.getElementById("InValorForMin").value);  
    let tempoDeUso= Number(document.getElementById("InTimeClient").value);
    //Uso da função Math.ceil() para arrendondamento p/ maior valor inteiro para calculo do valor.
    let valorAPagar=parseFloat((Math.ceil(tempoDeUso/15)*valorPorTempo)); 
    //exibição das informações no campo de saída.
    resp1.innerText=`Valor a Pagar R$: ${valorAPagar.toFixed(2)}`;  
    //evitando envio do form
    e.preventDefault();      
})