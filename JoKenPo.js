console.clear();
const prompt = require('prompt-sync')();

const ESCOLHAS = ['Pedra', 'Papel', 'Tesoura'];
const REGRAS = {
    'Pedra': { vence: 'Tesoura', perdePara: 'Papel' },
    'Papel': { vence: 'Pedra', perdePara: 'Tesoura' },
    'Tesoura': { vence: 'Papel', perdePara: 'Pedra' }
};

function exibirCabecalho() {
    console.log('=================================================');
    console.log('✊ ✌ ✋         JOKENPÔ - O JOGO          ✋ ✌ ✊');
    console.log('=================================================');
    console.log('\nDois jogadores escolhem entre Pedra✊, Papel✋ e Tesoura✌.');
    console.log('Pedra✊ ganha de Tesoura✌, Tesoura✌ ganha de Papel✋, e Papel✋ ganha de Pedra✊.\n');
}

function obterNumeroDeRodadas() {
    let rodadas;
    while (true) {
        rodadas = parseInt(prompt('Escolha a quantidade de rodadas: '), 10);
        if (!isNaN(rodadas) && rodadas > 0) {
            return rodadas;
        }
        console.log("Por favor, insira um número válido de rodadas.");
    }
}

function obterEscolhaJogador() {
    while (true) {
        console.log('\n[1] - Pedra ✊');
        console.log('[2] - Papel ✋');
        console.log('[3] - Tesoura ✌');
        const escolha = parseInt(prompt('Sua escolha: '), 10);

        if (escolha >= 1 && escolha <= 3) {
            return ESCOLHAS[escolha - 1];
        }
        console.log("Opção inválida! Escolha entre 1, 2 ou 3.");
    }
}

function obterEscolhaComputador() {
    const indiceAleatorio = Math.floor(Math.random() * ESCOLHAS.length);
    return ESCOLHAS[indiceAleatorio];
}

function determinarVencedor(escolhaJogador, escolhaComputador) {
    if (escolhaJogador === escolhaComputador) {
        return 'empate';
    }
    if (REGRAS[escolhaJogador].vence === escolhaComputador) {
        return 'jogador';
    }
    return 'computador';
}

function exibirResultadoRodada(vencedor, escolhaJogador, escolhaComputador) {
    console.log(`\nVocê escolheu: ${escolhaJogador}`);
    console.log(`O computador escolheu: ${escolhaComputador}\n`);

    switch (vencedor) {
        case 'jogador':
            console.log(`✨ ${escolhaJogador} ganha de ${escolhaComputador}. Você venceu a rodada! ✨`);
            break;
        case 'computador':
            console.log(`🔥 ${escolhaComputador} ganha de ${escolhaJogador}. Você perdeu a rodada. 🔥`);
            break;
        case 'empate':
            console.log('👀 Rodada empatada! 👀');
            break;
    }
    console.log('-------------------------------------------------');
}

function exibirResultadoFinal(pontosJogador, pontosComputador) {
    console.log('\n=================================================');
    console.log('                   FIM DE JOGO');
    console.log('=================================================\n');
    console.log(`PONTUAÇÃO FINAL:`);
    console.log(`Você: ${pontosJogador} ponto(s)`);
    console.log(`Computador: ${pontosComputador} ponto(s)\n`);

    if (pontosJogador > pontosComputador) {
        console.log('🏆 PARABÉNS! Você foi o grande campeão! 🏆');
    } else if (pontosComputador > pontosJogador) {
        console.log('🤖 O computador venceu desta vez. Tente novamente! 🤖');
    } else {
        console.log('🤝 O jogo terminou em empate! 🤝');
    }
    console.log('\n=================================================\n');
}

function jogar() {
    let jogarNovamente = 'sim';

    while (jogarNovamente.toLowerCase() === 's' || jogarNovamente.toLowerCase() === 'sim') {
        console.clear();
        exibirCabecalho();

        const numeroDeRodadas = obterNumeroDeRodadas();
        let pontosJogador = 0;
        let pontosComputador = 0;

        for (let i = 1; i <= numeroDeRodadas; i++) {
            console.log(`\n--- Rodada ${i} de ${numeroDeRodadas} ---`);
            const escolhaJogador = obterEscolhaJogador();
            const escolhaComputador = obterEscolhaComputador();
            const vencedor = determinarVencedor(escolhaJogador, escolhaComputador);

            if (vencedor === 'jogador') {
                pontosJogador++;
            } else if (vencedor === 'computador') {
                pontosComputador++;
            }

            exibirResultadoRodada(vencedor, escolhaJogador, escolhaComputador);
        }

        exibirResultadoFinal(pontosJogador, pontosComputador);

        do {
            jogarNovamente = prompt('Deseja jogar novamente? (Sim/Não): ');
        } while (
            jogarNovamente.toLowerCase() !== 's' && jogarNovamente.toLowerCase() !== 'sim' &&
            jogarNovamente.toLowerCase() !== 'n' && jogarNovamente.toLowerCase() !== 'nao'
        );
    }
    console.log('Obrigado por jogar Jokenpô! Até a próxima!\n');
}

jogar();