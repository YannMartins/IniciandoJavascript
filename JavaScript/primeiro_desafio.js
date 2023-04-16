/*
Faça um programa para calcular o valor gasto de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const kmLitro = 12;
const distanciaKm = 100;

const valorGasto = (distanciaKm / kmLitro) * precoCombustivel;

console.log(valorGasto.toFixed(2));