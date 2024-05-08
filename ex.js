/*const cachorro = {
    uivar: function(){
        raca: `SEM RACA`,
        console.log("AUUUUUU")

    },

    rosnar: function(){
        console.log("grrrr")

    },

    setRaca: function(raca){
        this.raca=raca;
    },

    getRaca: function(){
        return "A raça é: " + this.raca;
    }

}

console.log(cachorro.raca);
cachorro.setRaca(`Pastor Alemão`);
console.log(cachorro.raca);
console.log(cachorro.getRaca());


//cachorro.rosnar();
//cachorro.uivar();

*/
//----------------------------------------------------------------

/* Instanciando um objeto através da classe.
    let cachorro = {
        patas: 4,
        raca: `Sem raça`,

        latir: function(){
            console.log("AU AU")
        }

    }

    let labrador = Object.create(cachorro);
    labrador.latir();

    labrador.raca = `Labrador`;
    console.log(labrador.raca);
    console.log(cachorro.raca);

    let pastorAlemao = Object.create(cachorro);
    pastorAlemao.raca = `Pastor Alemão`;
    console.log(pastorAlemao.raca);
*/
//-----------------------------------------------------------


// construtores

/*function criarCachorro(raca,patas,cor){
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.raca = patas;
    cachorro.cor = cor;

    cachorro.latir = function(){   // o método   (ver o erro)
        console.log("AU AU");
    }

    return cachorro;
}
    
    let pug = criarCachorro(`Pug`,4,`preto`);
    console.log(pug);
    pug.latir;

*/

/*function criarCachorro(raca,patas,cor){
    this.raca = raca;
    this.patas= patas;
    this.cor = cor;

    this.uivar = function(){
        console.log("AU AU");
    }
}
let pinscher = new criarCachorro(`Pinscher`,4,`Branco`);
pinscher.uivar();
*/
//----------------------------------------------------------------------
/* construtor com método

class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    get getCor(){
        return this.cor;
    }

    set setCor(cor){
        this.cor = cor;
    }
}

let fila = new Cachorro(`Fila`,4,`Bege`);
console.log(fila);

fila.setCor = `Preto`;
console.log(fila.getCor);

*/
//--------------------------------------------------------------
/* HERANÇA

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(patas,raca){
        super(patas);
        this.raca=raca;
    }

    latir(){
        console.log("AU AU")
    }
}

let bob = new Cachorro(4,`Fila`);
console.log(bob);
bob.latir();

*/