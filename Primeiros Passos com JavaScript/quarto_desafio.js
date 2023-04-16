/*
O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso
de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura);

Elabora um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

Condição a partir do IMC de adultos:
    - Abaixo de 18.5, abaixo do peso; 
    - Entre 18.5 e 25, peso normal;
    - Entre 25 e 30, acima do peso;
    - Entre 30 e 40, obeso;
    - Acima de 40, obesidade grave.
*/

const peso = 80;
const altura = 1.80;

const imc = peso / Math.pow(altura, 2);
console.log(imc.toFixed(1));

if (imc <= 18.5) {
    console.log('Abaixo do Peso.');
} else if (imc > 18.5 && imc <= 25) {
    console.log('Peso Normal.');
} else if (imc > 25 && imc <= 30) {
    console.log('Acima do Peso.');
} else if (imc > 30 && imc <= 40) {
    console.log('Obeso.');
} else {
    console.log('Obesidade Grave.');
}