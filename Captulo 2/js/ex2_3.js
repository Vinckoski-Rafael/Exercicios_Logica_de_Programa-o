const frm = document.querySelector("form");
const resp1=document.getElementById("#outResp1");
const resp2=document.getElementById("#outResp2");
const resp3=document.getElementById("#outResp3");
frm.addEventListener("submit", (e) => {    
    const modeloVeiculo=document.getElementById("inVeiculo").value;
    const preco=Number(document.getElementById("inValor").value);

    const entrada=preco*0.50;
    const parcela= (preco*0.50) / 12;
    
    resp1.innerText = `Promoção: ${modeloVeiculo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText =`+12x de R ${parcela.toFixed(2)}`;
        
    e.preventDefault(); 
})
    
// const modeloVeiculo=document.getElementById("inVeiculo").value;
// const valorVeiculo=Number(document.getElementById("inValor").value);
// const entradaVeiculo=valorVeiculo / 2;
// const valorVeiculoParcelado =  entradaVeiculo / 12 ;

// resp1.innerText=`Promoção ${modeloVeiculo}`;
// resp2.innerText=`Entrade de R$: ${entradaVeiculo}`;
// resp3.innerText=`+12x de R$: ${valorVeiculoParcelado}`;
// console.log(resp1,resp2,resp3);