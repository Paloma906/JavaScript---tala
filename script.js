

//---------------------------------------------------------------------------------------------------

/* EXERCICIO 1 - Crie um array com 5 itens; 
   Acesse o item 1,3,4;
   Obs: arrays começam no índice 0
*/


let numeros = [1,2,3,4,5]

console.log(numeros);

console.log(numeros[0])
console.log(numeros[2])
console.log(numeros[4])

//----------------------------------------------------------------------------------------------------

/*EXERCICIO 2 - Crie um array com 2 elementos e outro com 4;
Imprima o número de elementos de cada um na tela;
*/

let elemento1 = ["Paloma","Patricia"];

console.log(elemento1);

let elemento2 = ["Abacate","Pêra","Amora","Banana"];

console.log(elemento2);

//---------------------------------------------------------------------------------------------------

/*EXERCICIO 3 - Crie um objeto onibus;
Com as propriedades rodas = 8;
Limite de passageiros = 40;
portas = 2;
Imprima todas as propriedades no console;


let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2,

   

};

console.log(onibus);

*/

//----------------------------------------------------------------------------------------------------

/* EXERCICIO 4- Adicione a propriedade janelas no ônibus, com o valor de 20;
Delete a propriedade rodas;
Imprima a propriedade janelas no console;
*/

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2,

   

};

console.log(onibus);

onibus.janelas = 20;

console.log(onibus);

delete onibus.rodas;

console.log(onibus);

//-------------------------------------------------------------------------------------------------------

/*EXERCICIO 5 - Crie um array com 5 nomes, incluindo o seu;
Verifique se o seu nome existe no array;
Se existir imprima alguma mensagem no console
*/

let nomes =["Paloma","Patricia","Dezi","Fabiana","Paola"]


nomes.forEach(nome => {
    console.log("Nome " + nome[0])
});