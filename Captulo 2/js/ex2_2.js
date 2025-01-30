//cria uma referencia ao form e aos elementos h3 e h4:
const frm =document.querySelector("form");
const resp1 = document.querySelector("h3");         
const resp2 = document.querySelector("h4");
//cria um ouvinte de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {    
    //Obtem conteudo dos campos
    const tituloFilme =document.getElementById("inTitulo").value;                   
    const duracaoInMinutos =Number(document.getElementById("inMinutes").value);
    //Math.floor para arredondar para baixo o resultado
    const horas = Math.floor(duracaoInMinutos / 60);   
    //Operação de modulo para obter resto da divisão
    const minutos= duracaoInMinutos % 60;                   
    //Exibe  resultados
    resp1.innerText =tituloFilme;
    resp2.innerText =`${horas} hora(s) e ${minutos} minuto(s)`;
    //evita envio do form
    e.preventDefault();         
})



