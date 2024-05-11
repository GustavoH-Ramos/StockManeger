const botaoTelaCadastro = document.querySelector('#botaoTelaCadastro');
const botaoTelaAtualizar = document.querySelector('#botaoTelaAtualizar');
const botoes = document.querySelectorAll('.botao__opcoes');
const telaCadastro = document.querySelector('#telaCadastrar');
const telaAtualizar = document.querySelector('#telaAtualizar');

botaoTelaAtualizar.addEventListener('click', () => {
    botaoTelaAtualizar.classList.add('active');
    botaoTelaCadastro.classList.remove('active');
    mudarTela()
})

botaoTelaCadastro.addEventListener('click', () => { 
    botaoTelaCadastro.classList.add('active');
    botaoTelaAtualizar.classList.remove('active');
    mudarTela()
})

function mudarTela(){
        if (botaoTelaCadastro.classList.contains('active')) {
            telaCadastro.classList.remove('hidde')
            telaAtualizar.classList.add('hidde')  
        }else {
            telaCadastro.classList.add('hidde')
            telaAtualizar.classList.remove('hidde')
        }
}
