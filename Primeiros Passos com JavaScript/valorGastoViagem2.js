/*
Faça um programa para calcular o valor gasto de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const kmLitro = 10;
const distanciaKm = 100;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = (distanciaKm / kmLitro) * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = (distanciaKm / kmLitro) * precoGasolina;
    console.log(valorGasto.toFixed(2));
}