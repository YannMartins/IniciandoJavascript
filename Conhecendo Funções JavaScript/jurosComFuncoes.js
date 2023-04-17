function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

function formaDePagamento(opcao) {
    if (opcao === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (opcao === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if (opcao === 3) {
        console.log(precoEtiqueta);
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
}

const precoEtiqueta = 100;

formaDePagamento(4);
