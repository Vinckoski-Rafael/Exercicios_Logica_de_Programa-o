//cria uma referencia ao form e aos elementos h3 e h4:
const frm =document.querySelector("form");
const resp1 = document.querySelector("h3");         
const resp2 = document.querySelector("h4");

//cria um ouvinte de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {    
    const tituloFilme =document.getElementById("inTitulo").value;                   //Obtem conteudo dos campos
    const duracaoInMinutos =Number(document.getElementById("inMinutes").value);

    const horas = Math.floor(duracaoInMinutos / 60);        //Math.floor para arredondar para baixo o resultado
    const minutos= duracaoInMinutos % 60;                   //Operação de modulo para obter resto da divisão
    
    resp1.innerText =tituloFilme;
    resp2.innerText =`${horas} hora(s) e ${minutos} minuto(s)`; //Exibe  resultados
    e.preventDefault();         //evita envio do form
})



