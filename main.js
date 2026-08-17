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
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20){
 tamanhoSenha = tamanhoSenha+1;   
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
    }
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

cosole.log(checkbox[0]checked);

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numero = '0123456789';
const simbolos = '!@#$%*?';
geraSenha();

function geraSenha(){
let senha = '';
    for (let index = 0; index < tamanhoSenha; index++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha= senha+ letrasMaiusculas[numeroAleatorio];
}
campoSenha.value = letrasMaiusculas;
}