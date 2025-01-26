//Ler um número, calcular e informar os seus vizinhos.

const numero =Number(prompt("Digite um numero"));
const anterior=numero-1;
const posterior=numero+2;
alert(`Numero: ${numero}\nVizinhos: ${anterior},${posterior}`);



// Ler valor total e pessoas que vão pagar, informar o valor a ser pago por cliente.
const valorTotalPizzaria = Number(prompt("Digite o valor total em R$"));
const totalDePessoas= Number(prompt("Digite o numero de pessoas que vão pagar a conta:"));
const valorPorPessoa= valorTotalPizzaria / totalDePessoas;
alert(`Valor Da conta R$: ${valorTotalPizzaria.toFixed(2)}\nNumero de clientes: ${totalDePessoas}\nValor por cliente R$:${valorPorPessoa.toFixed(2)}`);

//Ler valor do Produto e informar o valor de pagamento á vista com 10% de desconto ou valor parcelado em 3x.
const valorProduto =Number(prompt("Digite o valor do produto")); 
const valorAVista = valorProduto - (valorProduto * 0.10);
const valorAPrazo = valorProduto / 3;

alert(`Preço R$ : ${valorProduto}\nÁ vista R$ : ${valorAVista}\nOu em 3x de R$ : ${valorAPrazo}`);

//Ler valor das notas e calcular a media das notas.

const nota1 = Number(prompt("Digite a nota 1:"));
const nota2 = Number(prompt("Digite a nota 2"));
const media = (nota1 + nota2) / 2 ;

alert(`Nota 1 : ${nota1.toFixed(1)}\nNota 2 : ${nota2.toFixed(1)}\nMédia : ${media.toFixed(1)}`);