// 02/05/2024      tipos

/*------------------------------------------------------------------ */

// Array
/*let arr = [1,2,3,6,7];
let nomes = ["Paloma","Paola","Dezi"];
let boll = [true,false,true];
let misturado =[1,"Paloma",true];

console.log(arr[1]);
console.log(nomes[0]);
console.log(boll[2]);
console.log(arr[arr.length -1]);
*/

// Transformar letra em minúscula em maiúscula

/*let marca = "Nike";
console.log(marca.toUpperCase())
*/

//-------------------------------------------------------------------------------------------
/* OBJETOS

let cachorro = {
    patas: 4,
    nome : `Bob`,

    latir: function(){
        console.log("AU AU")
    }

};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();
*/

//-------------------------------------------------------------------------------------------
/* deletar e adicionar propriedades no objeto

let pessoa = {
    nome: "Paloma",
    idade: 39,
    Profissão: "herdeira",

}

console.log(pessoa);
delete pessoa.nome;
console.log(pessoa);

pessoa.casada = false;
console.log(pessoa);

*/

//---------------------------------------------------------------------------------------------
/* herdar ( carro herda propriedades de adicional)

let carro = {
    portas:2,
    motor:5,


};
console.log(carro);

let adicional = {
    tetoSola: true,
    ar: true,
};

Object.assign(carro,adicional);
console.log(carro);

*/

//------------------------------------------------------------------------------------------------
// Mutação (cria dois objetos iguais)
//--------------------------------------------------------------------------------------------------
// loops de Array

/*let nomes = ["Ana","Paloma","Dezi","Paola","Patricia"]

for(let i=0; i<= nomes.length; i++){
    console.log(nomes[i]);

}
*/
//------------------------------------------------------------------------------------------------------
// push e pop


/*let nomes = ["Ana","Paloma","Dezi","Paola","Patricia"]

let remover = nomes.pop();

console.log(remover);
console.log(nomes);

nomes.push("Felipe");
console.log(nomes);

*/


// indexOf e lastIndexOf

// forEach

/*let nomes = ["Ana","Paloma","Dezi","Paola","Patricia"]

nomes.forEach(nomes =>{
    console.log("O nome é: " + nomes);
});

*/

// includes (aparece falso or true)

/*let nomes = ["Ana","Paloma","Dezi","Paola","Patricia"]

console.log(nomes.includes("Dezi"));
*/

// -----------------------------------------------------------------------------------------------

/*let num = 1;
let num1= 5;
let num2 = 10;
let num3 = 20;

function imprimirNumeros(...arg){
    for(let i=0; i< arg.length ; i++){
        console.log(arg[i]);
    }
}

imprimirNumeros(num,num1);
console.log(`pausa`);
imprimirNumeros(num3);
console.log(`pausa`);
imprimirNumeros(1,2,3,4,5,6,7,8,9,10);

*/

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