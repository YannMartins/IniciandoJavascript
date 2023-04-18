
/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetro e o preço do combustível nos dê o valor gasto em reais para realizar 
    este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;
    distanciaEmKm;
    precoCombustivel;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    valorPercurso(distanciaEmKm, precoCombustivel){
        return (distanciaEmKm * this.gastoMedio) * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Azul', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);

console.log(uno.valorPercurso(70, 5));
console.log(palio.valorPercurso(70, 5));