// novo recurso do ES 2015
const pessoa = {
    nome: 'Ana',
    sobrenome: 'julia',
    idade:  5,
    endereco: {
        logradouro: 'Rua do pringolé',
        numero: 4000
    }
}
// As chaves representam o operador de desestruturação (destructuring)
const { nome, idade } = pessoa
console.log(nome + ', ' + idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada= true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, CEP }} = pessoa
console.log(logradouro, numero, CEP)

const { conta: { ag, num } } = pessoa
console.log(ag, num)