// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

const levels = {
    11: "Bronze",
    21: "Prata",
    51: "Ouro",
    81: "Diamante",
    91: "Imortal",
    101: "Radiante"
}

function getScore(wins, losses) {
    return wins - losses
}

// função para determinar o nivel
function getLevel(score) {
    let ret = "Ferro" // inicializo retorno com menor nivel possivel

    comp = Object.keys(levels) // pego as chaves do objeto

    comp = comp.map(el => parseInt(el)).sort((a, b) => a - b) // transformo as chaves em int e ordeno (minha logica precisa de ordenacao)

    comp.forEach(el => {
        // se o saldo for maior do que o valor da chave, salvo ela no retorno
        // essa logica vai substituindo o valor do retorno até chegar no level correto
        // se as chaves nao estiverem ordenadas, pode ser que a funcao retorne um level menor que o real
        if (score >= el) {
            ret = levels[el]
        }
    });

    return ret
}

let wins = 0
let losses = 0
let score = 0

// importando readline para ler entrada do console
const readline = require("readline")

// interface para ler entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// lendo entrada
rl.question("Digite o número de vitórias e derrotas do Herói separados por vírgula: ", function (answer) {
    [wins, losses] = answer.split(",")
    wins = parseInt(wins)
    losses = parseInt(losses)
    score = getScore(wins, losses)
    console.log(`O Herói tem saldo de ${score} e está no nível de ${getLevel(score)}`)
    rl.close();
});
