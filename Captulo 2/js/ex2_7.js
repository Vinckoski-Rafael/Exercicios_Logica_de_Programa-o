//Criação de  Referencia ao form e aos elementos H3 com seus respctivos Ids:
let frm=document.querySelector("form");
let MostraValorTotal=document.getElementById("#OutValorTotal");
let MostraValorProduto=document.getElementById("#OutValorProduto");
//criação de um ouvinte de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit",(e)=>{
    //Obtendo conteudo dos campos de entrada
    let nomeProduto=document.getElementById("InProduto").value;             
    let precoProduto=Number(document.getElementById("InPreco").value);
    //Calculo
    let valorTotal= parseFloat((precoProduto*3)-(precoProduto/2));      
    let valorProduto=(precoProduto/2);
    //exibição das informações no campo de saída.
    MostraValorTotal.innerText=`${nomeProduto} - Promoção: Leve 3 por R$ ${valorTotal.toFixed(2)}`;     
    MostraValorProduto.innerText=`O 3° produto custa apenas R$: ${valorProduto.toFixed(2)}`;            
    //evitando envio do form
    e.preventDefault();     
})