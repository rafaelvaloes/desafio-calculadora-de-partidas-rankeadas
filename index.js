
//Variaveis

let quantidadeVitoria = "100"
let quantidadeDerrota = "51"
let saldoPartidas = calcularPartidas(quantidadeVitoria, quantidadeDerrota)
let nivel = calcularNivel(saldoPartidas)

// Função para encontrar o saldo

function calcularPartidas(qtdVitorias, qtdDerrotas){

    let saldo = qtdVitorias - qtdDerrotas
    return saldo
}

function calcularNivel(saldoPartidas){

    if(saldoPartidas < 11){

        let nivelAtual = "Ferro"
        return nivelAtual

    } else if (saldoPartidas > 10 && saldoPartidas < 21){

        let nivelAtual = "Bronze"
        return nivelAtual

    } else if (saldoPartidas > 20 && saldoPartidas < 51){

        let nivelAtual = "Prata"
        return nivelAtual

    } else if (saldoPartidas > 50 && saldoPartidas < 81){

        let nivelAtual = "Ouro"
        return nivelAtual

    } else if (saldoPartidas > 80 && saldoPartidas < 91){

        let nivelAtual = "Diamante"
        return nivelAtual

    } else if (saldoPartidas > 90 && saldoPartidas < 101){

        let nivelAtual = "Lendário"
        return nivelAtual

    } else if (saldoPartidas > 100){

        let nivelAtual = "Imortal"
        return nivelAtual

    }


}



console.log(`O Herói tem saldo de ${saldoPartidas} partidas e está no nivel ${nivel} .`)
