console.clear();
const prompt = require('prompt-sync')();
//Variaveis para escolha
let repete = 'sim';
const jokenpo = ['Pedra', 'Papel', 'Tesoura'];

//Declaração para repetição 
while (repete == 's' || repete == 'sim') {
//Variaveis de contagem
  let pontosJogador=0 ;
  let pontosComputador=0 ;
  let pontosEmpate=0 ;
 //Explicação
console.log('✊ ✌ ✋ ✊ ✌ ✋PEDRA PAPEL TESOURA✊ ✌ ✋ ✊ ✌ ✋');
console.log();
console.log('Dois jogadores escolhem entre Pedra✊, Papel✋ e Tesoura✌.');
console.log('Cada escolha possui um força, uma equivalência e uma fraqueza.');
console.log('Pedra✊ ganha de Tesoura✌, Tesoura✌ ganha de Papel✋, Papel✋ ganha de Pedra✊.');
console.log('Tesoura✌ perde para Pedra✊, Pedra✊ perde para Papel✋, Papel✋ perde para Tesoura✌.');
console.log();
   
  //Escolha de rodadas
  let rodadas = +prompt('Escolha a quantidade de rodadas:  ');
  //Declaração para repetição das rodadas
  for (i = 1; i <= rodadas; i++) {
    //Escolha aleatória do PC
    let comp = Math.round(Math.random() * 2) + 1
    
    if (comp === 1) {
      comp = jokenpo[0]
    }
    else if (comp === 2) {
      comp = jokenpo[1]
    }
    else if (comp === 3) {
      comp = jokenpo[2]
    }
    //Escolha do Jogador
    console.log();
    let jogador = +prompt('Digite:[1]-Para PEDRA, [2]-Para PAPEL e [3]-Para TESOURA:    ');

    while (jogador != 1 && jogador != 2 && jogador != 3) {
      console.log("Insira uma opção valida!")
      jogador = +prompt("Para selecionar sua opção digite o numero:Para PEDRA, [2]-Para PAPEL e [3]-Para TESOURA:");
    }

    if (jogador === 1) {
      jogador = jokenpo[0]
    }
    else if (jogador === 2) {
      jogador = jokenpo[1]
    }
    else if (jogador === 3) {
      jogador = jokenpo[2]
    }
    //Exibição da escolha do Jogador
    console.log('Você escolheu: ', jogador);
    console.log();
    //Exibição da escolha do PC
    console.log('o computador escolheu: ', comp);
    console.log();
    //Declaração das Variaveis de resultado
    let vence = ('Você venceu essa rodada!. ♡＾▽＾♡');
    let empate = ('Houve empate nessa rodada. (乛-乛)');
    let perde = ('Você perdeu. ಥﭛಥ ');
    //Declaração das condições
    if (comp === jokenpo[0] && jogador === jokenpo[0]) {
      console.log('Pedra✊ com Pedra✊ ',empate);
      pontosEmpate++;
    }
    else if (comp === jokenpo[0] && jogador === jokenpo[1]) {
      console.log('Papel✋ embrulha Pedra✊. ',vence)
      pontosJogador++
    }
    else if (comp === jokenpo[0] && jogador === jokenpo[2]) {
      console.log('Pedra✊ quebra Tesoura✌. ',perde);
      pontosComputador++;
    }
    else if (comp === jokenpo[1] && jogador === jokenpo[1]) {
      console.log('Papel✋ com Papel✋. ',empate);
      pontosEmpate++;
    }
    else if (comp === jokenpo[1] && jogador === jokenpo[0]) {
      console.log('Papel✋ embrulha Pedra✊. ',perde);
      pontosComputador++;
    }
    else if (comp === jokenpo[1] && jogador === jokenpo[2]) {
      console.log('Tesoura✌ corta Papel✋. ',vence);
      pontosJogador++;
    }
    else if (comp === jokenpo[2] && jogador === jokenpo[2]) {
      console.log('Tesoura✌ com Tesoura✌. ',empate);
      pontosEmpate++;
    }
    else if (comp === jokenpo[2] && jogador === jokenpo[1]) {
      console.log('Tesoura✌ corta Papel✋. ',perde);
      pontosComputador++;
    }
    else if (comp === jokenpo[2] && jogador === jokenpo[0]) {
      console.log('Pedra✊ quebra tesoura✌. ',vence)
      pontosJogador++;
    }
  }
    console.log();
    console.log('➤  FIM DAS RODADAS');
    console.log('Foram jogadas ',rodadas, 'rodadas.');
    console.log();
    console.log();
    console.log('JOGADOR:',pontosJogador,'pontos');
    console.log('COMPUTADOR:',pontosComputador, 'pontos');
    console.log('EMPATE:',pontosEmpate, 'pontos');


  if (pontosJogador > pontosComputador) {
    console.log('VOCÊ VENCEU! PARABÉNS!     (• ε •)')
  }
  else if (pontosJogador < pontosComputador) {
    console.log('VOCÊ PERDEU! SINTO MUITO.    ¯\_(ツ)_/¯')
  }
  else if (pontosComputador === pontosJogador) {
    console.log('O jogo terminou Empatado!     ╰(◣﹏◢)╯')
  }
  do {
    repete = prompt('<<<<SIM<<<<<<<< NOVO JOGO? >>>>>>>>NÃO>>>>').toLowerCase();
    console.clear();
  } while (
    repete!= 's' && repete != 'sim' &&
    repete != 'n' && repete != 'nao'
  );

  // ENCERRANDO O JOGO
  if (repete == 'n' || repete == 'nao') {
    console.log('✊ ✌ ✋ ✊ ✌ ✋FIM DE JOGO✊ ✌ ✋ ✊ ✌ ✋');
   
  }
}
