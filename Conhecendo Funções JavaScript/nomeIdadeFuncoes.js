function digaSeuNome(nome) {
    return 'Seu nome é ' + nome;
}

function digaSuaIdade(idade) {
    if (idade >= 18) {
        console.log(digaSeuNome('Yann') + ' e você é maior de idade.');
    } else {
        console.log(digaSeuNome('Yann') + ' e você é menor de idade.');
    }
}

digaSuaIdade('18');
digaSuaIdade('17');
