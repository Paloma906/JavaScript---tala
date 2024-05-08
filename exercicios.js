/* Exercicio 1:
Cria uma classe que simula uma conta no banco(utilize a forma que preferir);
Deve conter a propriedade saldo;
E os métodos deposito e saque;
Teste os métodos;


class contaBancaria{
    constructor(){
        this.saldo = 0;
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        if(valor <=this.saldo){
            this.saldo -= valor;
            return valor;
        }else{
            console.log("Saldo Insuficiente")
        }
        
    }
}

const minhaConta = new contaBancaria();
minhaConta.depositar(1000);
console.log(minhaConta);
console.log(minhaConta.sacar(500));
console.log(minhaConta.sacar(800));
*/
//-----------------------------------------------------------------------------------------------------------------------

/* Exercicio 2

Cria uma classe que simula um carrinho de compras de um e-commerce;
Propriedades itens, quantidade total, valor total;
Crie os métodos para adicionar e remover itens;



class carrinhoCompras{
    constructor(){
        this.itens = 0;
        this.quantidadeTotal = 0;
        this.valorTotal = 0;

    }


    adicionarItem(item,quantidade,valorUnidade){
        this.itens.push(item,quantidade,valorUnidade)


    }
}

continuar
*/
//------------------------------------------------------------------------------------------

/* Exercicio 3
Crie um objeto que simula um endereço de um cliente;
Propriedades: Rua, Bairro, Cidade e Estado;
No construtor o endereço já deve ser definido por completo;
Crie métodos para atualizar todas as propriedades;
*/


let enderecoCliente = {
    rua: `João Lopes`,
    bairro: `Marechal Rondon`,
    Cidade: `Salvador`,
    Estado: `Bahia`
}