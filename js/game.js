const player1 = 'X'
const player2 = 'O'

const vitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let playTime = player1

let gameOver = false

atualizaMostrador()
inicializarCampo()

function atualizaMostrador() {

    if (!gameOver) {
        
        let player = document.getElementById('jogadorAtual')
        
        if (playTime == player1) {

            player.innerText = 'X'

        } else {
            
            player.innerText = 'O'

        }
    }
}

function inicializarCampo() {
    let campos =  document.getElementsByClassName('campo')

    for (let i = 0; i < campos.length; i++) {
        campos[i].addEventListener('click', function() {

            if (!gameOver) {
                if (this.innerText === '') {
                    this.innerText = playTime
                    const resultado = verificarGanhador()
                    if (resultado.length != 0 ) {
                        alert('O jogador '+playTime+' ganhou!!!')
                        gameOver = true
                        return ''
                    }
                    mudarJogador()
                }

            }
        })
        
    }
}

function mudarJogador(){
    if(playTime == player1){
        playTime = player2
    } else {
        playTime = player1
    }

    atualizaMostrador()

}


function verificarGanhador(){
    let campos =  document.getElementsByClassName('campo')

    const resultado = vitoria.filter(v => {
        return campos[v[0]].innerHTML == campos[v[1]].innerHTML && campos[v[1]].innerHTML == campos[v[2]].innerHTML && campos[v[1]].innerHTML == playTime
    })
    console.log(resultado)
    return resultado
}