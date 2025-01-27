//Calculo p/ valor do jantar

let jantar=Number(prompt('Digite o valor do jantar')); //le o valor do jantar
let taxaDoGarcon= jantar * 0.10;        //          calcula variaveis
let valorTotal= jantar+taxaDoGarcon;    //              de saida

alert(`Taxa do garçon de R$ ${taxaDoGarcon.toFixed(2)} e valor total de ${valorTotal.toFixed(2)}`); // Função .toFixed(2) para mostrar  e casas decimais.

