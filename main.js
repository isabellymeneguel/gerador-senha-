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

for (let index = 0; index < checkbox.length; index++) {
checkbox[index].onclick = geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const letrasMaiusculas = 'abcdefghijklmnopqrstuvwxyz';
const numero = '0123456789';
const simbolos = '!@#$%*?';
geraSenha();

function geraSenha(){
let alfabeto ='';
   if (checkbox[0].checked) {
    alfabeto = alfabeto + letrasMaiusculas;
   }
   if(checkbox[1].checked) {
    alfabeto = alfabeto + letrasMinuscula;
   }
if (checkbox[2].checked) {
    alfabeto = alfabeto + numero;
}
if (checkbox[3].checked) {
    alfabeto = alfabeto + simbolo;
}
console.log(alfabeto);
let senha ='';
for (let index = 0; index < tamanhoSenha; index++) {
   let numeroAleatorio = Math.random()*alfabeto.lenght;
   numeroAleatorio = Math.floor(numeroAleatorio);
   senha = senha + letrasMaisculas[numeroAleatorio];
}
campoSenha.Value = letrasMaisculas;
}