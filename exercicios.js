/* QUESTÃO 1

Crie um array com 5 itens;
Acesse o item 1,3,4;
Obs: Arrays começam no índice 0;



let numeros = [1,2,3,4,5]

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[3]);
*/

//--------------------------------------------------------------------------------------------------------

/*QUESTÃO 2

Crie um array com 2 elementos e outro com 4;
Imprima o número de elementos de cada um na tela;


let numbers = [1,2];
let cores = ["azul","preto","laranja","amarelo"];

console.log(numbers);
console.log(cores);
*/

//------------------------------------------------------------------------------------------------------------

/* QUESTÃO 3

Crie um objeto onibus;
com as propriedades rodas = 8;
Limites de passageiros =40;
Portas = 2;
Imprima todas as propriedades no console;


let onibus = {
    rodas: 8,
    limitePassageiros:40,
    portas: 2
};

console.log(onibus);

*/

//------------------------------------------------------------------------------------------------------------------

/* QUESTÃO 4

Adicione a propriedade janela no ônibus, com o valor de 20;
Delete a propriedade rodas;
Imprima a propriedade janelas no console;


let onibus = {
    rodas: 8,
    limitePassageiros:40,
    portas: 2,
};

console.log(onibus);
onibus.janela = 20;
console.log(onibus);
console.log(onibus.janela);
*/

//------------------------------------------------------------------------------------------------------------------

/* QUESTÃO 5

Crie um array com 5 nomes, incluindo o seu;
Verifique se o seu nome existe no array;
Se existir imprima alguma mensagem no console;


let nomes = ["Paloma","Paola","Fabiana","Maria","Dezi"]


if (nomes.includes("Paloma")){
    console.log("Meu nome está no array!");
}else{
    console.log("Meu nome não está no array!");
}
*/

//------------------------------------------------------------------------------------------------------------------------

/* QUESTÃO 6
Crie dois arrays, um com mais de 5 elementos e outro com menos;
Faça uma função que verifica o número de elementos;
Se possuir menos que,imprima "Poucos elementos" no console;
Se tiver mais,imprima "Muitos elementos"


let elementoA = ["azul","verde","preto","amarelo","rosa"];
let elementoB = ["branco","cinza","laranja"];

if (elementoA.length > elementoB.length){
    console.log("ElementoA tem mais cores que ElementoB");
}else{
    console.log("ElementoB tem mais cores que ElementoA");
}
*/

//-------------------------------------------------------------------------------------------------------------------------

/* QUESTÃO 7
Crie um array com 5 elementos;
Faça uma iteracão entre todos eles e imprima no console o valor;


let numbers = [5,10,15,20,25]

numbers.forEach(num => {
    console.log("O valor é: " + num);
});
*/

//------------------------------------------------------------------------------------------------------------------------

/* QUESTÃO 8
Crie um JSON com 3 propriedades;
Atribua ele a uma variável;
Acesse as propriedades imprimindo no console;


let cachorro = {

    "cor": "marrom",
    "tamanho":"pequeno",
    "raça": "pinscher"
    
};

console.log(cachorro.cor);
console.log(cachorro.tamanho);
console.log(cachorro.raça);
*/

//-----------------------------------------------------------------------------------------------------------------------------
/* QUESTÃO 9

Crie um array a partir de uma frase;
Imprima cada palavra do array no console por meio de um for;


let frase = "Os anjos nos deram a comida; os demônios, o tempero. (Sanji)"

let palavras = frase.split(" ");


function imprimirPalavras(palavras){
    for(let i=0;i<palavras.length;i++){
        console.log(palavras[i])
    }
};

imprimirPalavras(palavras);
*/
//---------------------------------------------------------------------------------------------------------------------------

/*QUESTÃO 10
Crie um objeto calculadora;
Que tem os seguintes métodos: somar,subtrair,multiplicar e dividir;
Os métodos só devem aceitar dois parâmetros;
Utilize cada um dos métodos e imprima os valores no console;


let calculadora = {
    somar: function(a,b){
        return(a+b);

    },
    subtrair: function(a,b){
        return(a-b);
    },
    multiplicar: function(a,b){
        return(a*b);
    },
    dividir: function(a,b){
        if (b !== 0){
            return (a/b);
        }else{
            return "Não é possível dividir por zero!"
        }
    }
        
}

console.log(calculadora.somar(2,2));
console.log(calculadora.subtrair(5,2));
console.log(calculadora.multiplicar(9,2));
console.log(calculadora.dividir(6,3));
*/