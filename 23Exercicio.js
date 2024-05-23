/*let b = 2;

try {
    let = 2+b
    
} catch (error) {
    console.log(error)
    
    
}

console.log('Paloma')

*/
//-----------------------------------------------------------
/*const reg1 = new RegExp(`Bola`)

console.log(reg1.test(`Tem bola`))
console.log(reg1.test(`Não tem`))

const reg2 = /bola/;
console.log(reg2.test(`Tem bola`))
console.log(reg2.test(`Não tem`))

*/

//--------------------------------------------------------------------

/*const reg1 = /[1,2,3,4,5]/
console.log(reg1.test(`Temos o numero 6`))
console.log(reg1.test(`Temos o numero 3`))
*/
//---------------------------------------------------------------------

/*const dia = /\d\d/;
console.log(dia.test(`2019`) && `2019`.length ==2);

const palavras = /\w\w\w/;
console.log(palavras.test(`asdd`));
*/
//---------------------------------------------------------------------

/*const notab = /[^ab]/
console.log(notab.test(`a`))
console.log(notab.test(`Aqui tem a`))
*/
//--------------------------------------------------------------------

/*const cep = /\d{5}-\d{3}/
console.log(cep.test(`88888-888`))
console.log(cep.test(`888-88888`))
*/
//----------------------------------------------------------------------
/*const reg = /\w+: (Ana| João |Maria)/
console.log(reg.test(`Nome: Ana`));
console.log(reg.test(`Nome: Pedro`));
*/
//---------------------------------------------------------------------------

/*console.log(`1`);

setTimeout(() => {
    console.log('5')
}, 5000);

console.log('2');
console.log('3');
console.log('4');
*/
//----------------------------------------------------------------------------------


/*let p =Promise.resolve(5);
console.log(`Outros códigos...`)
console.log(p);
p.then((value)=> {console.log(`o valor é: ${value}`)});
*/
//------------------------------------------------------------------------------

/*function somaDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve(a+b);
        },4000);
    })
}

async function resoveSoma(a,b,c){
    let x = somaDelay(a,b);
    let y = c

    return await x+y;

}

resoveSoma(1,2,3).then(value => console.log(value));
*/
//----------------------------------------------------------------------------------
/* function* criarId(){
    let id = 0;
    while(true){
        yield id++
    }
 }

 let idcriado = criarId();
 console.log(idcriado.next().value);
 console.log(idcriado.next().value);
 console.log(idcriado.next().value);
 console.log(idcriado.next().value);
 console.log(idcriado.next().value);
 console.log(idcriado.next().value);

 */