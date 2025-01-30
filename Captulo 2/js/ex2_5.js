//Criação de  Referencia ao form e aos elementos H3 com seus respctivos Ids:
let frm=document.querySelector("form");
let nome=document.getElementById("#OutNome");
let valor=document.getElementById("#OutValor");
//criação de um ouvinte de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit",(e)=>{
    //Obtendo conteudo dos campos de entrada
    let nomeMedicamento= document.getElementById("InNome").value;
    let valorSemDesconto= Number(document.getElementById("InValor").value); 
    //Calculo usando Math.trunc para remoção das casas decimais(Centavos);
    let valorComDesconto= parseFloat(Math.trunc(valorSemDesconto*2));   
    //exibição das informações no campo de saída.
    nome.innerText=`Promoção de ${nomeMedicamento}`;
    valor.innerText=`Leve 2 por apenas R$: ${valorComDesconto.toFixed(2)}`; 
    //evitando envio do form
    e.preventDefault();     
})