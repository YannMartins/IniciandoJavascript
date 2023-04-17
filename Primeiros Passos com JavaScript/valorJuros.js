/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição
de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condição de pagamento:
    1 - À vista no Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const formaPagamento = 4;

const precoEtiqueta = 100;

if (formaPagamento === 1) {
    console.log(precoEtiqueta * 0.9);
} else if (formaPagamento === 2) {
    console.log(precoEtiqueta * 0.85);
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta * 1.1);
}