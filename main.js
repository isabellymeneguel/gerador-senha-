const numeroSenha = documnet.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document .querySelector('.parametro-senha_botao');
botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1){ 
         tamanhoSenha = tamanhoSenha-1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20){
 tamanhoSenha = tamanhoSenha+1;   
    }
    numeroSenha.textContent = tamanhoSenha;
    }
const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

campoSenha.textContent = letrasMaiusculas;