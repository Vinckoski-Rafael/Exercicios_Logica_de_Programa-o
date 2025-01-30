//Criação de  Referencia ao form e aos elementos H3 com seus respctivos Ids:
const frm = document.querySelector("form");
const resp1=document.getElementById("#outResp1");
const resp2=document.getElementById("#outResp2");
const resp3=document.getElementById("#outResp3");
//cria um ouvinte de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {    
    //Obtendo conteudo dos campos de entrada
    const modeloVeiculo=document.getElementById("inVeiculo").value;
    const preco=Number(document.getElementById("inValor").value);       
    // Calculo 
    const entrada=preco*0.50;
    const parcela= (preco*0.50) / 12;               
    //exibição das informações de saída.
    resp1.innerText = `Promoção: ${modeloVeiculo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;   
    resp3.innerText =`+12x de R ${parcela.toFixed(2)}`;
    //evitando envio do form
    e.preventDefault();   
})
    
