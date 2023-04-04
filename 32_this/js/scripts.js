var teste = 5;

console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "Mathheus",
    idade:29,
    falar: function() {
        console.log("Ola, tudo bem");
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'sr.' + this.nome;
    },
  
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Olá" + sdc);




