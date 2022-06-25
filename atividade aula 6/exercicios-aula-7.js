// Use `console.log(variavel)` para verificar suas respostas no Console
// do Inspetor da Web do navegador.

// 1. Gere uma lista contendo apenas os números pares (filter)
const numeros = [1, 4, 10, 23, 26, 27, 29, 30, 311, 320, 4490]
numeros.filter(n => n % 2 == 0)

// 2. Faça uma lista que possua apenas frutas com quatro letras (filter)
// Dica: você pode usar 'string'.length para verificar a quantidade de
// caracteres de uma string.
const frutas = [
  'maçã', 'banana', 'pera', 'uva', 'coco', 'caqui', 'kiwi', 'acerola'
]
let frutasFilt = frutas.filter(frutas => frutas.length == 4)

// 3. Maiusculize os nomes dados (map)
// Dica: Maiusculizar é escrever cada palavra com a inicial em
// maiúsculo. Você pode conferir todos os métodos de String em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
const nomes = ['cecília', 'roberto', 'bruna', 'Osvaldo', 'Carlos']
const maiusculo = (name) => {
  return name.toUpperCase()
}
let nomeM = nomes.map(maiusculo)

// 4. Concatene os nomes e sobrenomes da lista (map)
const nomesESobrenomes = [
  ['Fernanda', 'Montenegro'],
  ['Lázaro', 'Ramos'],
  ['Heloísa', 'Périssé'],
  ['Daniel', 'Furlan'],
  ['Adriana', 'Esteves']
]

let nomesCompletos = nomesESobrenomes.map((item) => {
  return `${item[0]} ${item[1]}`
});

// 5. Calcule a média das notas (reduce)
const notas = [7, 5, 4, 3, 8.5]

const media = (ant, atual) => ant + atual

const total = notas.reduce(media)
let mediaF = total/notas.length
 
// 6. Calcule a média ponderada das notas (reduce)
// Cada item da lista é composto por uma sublista com a nota (na
// primeira posição) e o peso (na segunda posição).

const notasComPeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]]

const produto = (nota, peso) => nota*peso
let totalNota = 0

for(let i = 0; i < notasComPeso.length; i++){
  totalNota =  totalNota + notasComPeso[i].reduce(produto)
}
totalNota = totalNota/8

// 7. (Extra) Refaça o exercício 6 tirando as duas menores notas. Dica:
// Lembre dos métodos sort e slice.

let notasMaiores = notasComPeso.map((nota) => {
  return nota[0] * nota[1]
})

notasMaiores = notasMaiores.sort((a, b) => a - b)

notasMaiores = notasMaiores.slice(2, 5);
