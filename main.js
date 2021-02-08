console.log("Bem vindo ao curso de js");

var nome = "Junior"; //String

// var idade = 34; // Number

var dev = false; // Boolean

var linguagens = ['javascript', 'Python', 'Java']; //Array

console.log(linguagens[2])




function minhaCidade() {
    var cidade = "São Paulo";
    console.log(cidade);
}

minhaCidade();

function minhaIdade() {
    for (let idade = 23; idade <= 50; idade++) {
        console.log('minha idade: ', idade);
    }

    console.log('minha idade fora do for ',idade)
}

minhaIdade();

const endereco = {
    rua: 'avenida paulista',
    numero: 233
}

endereco.rua = 'São João',
endereco.numero = 100

console.log(endereco);