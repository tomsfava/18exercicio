document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('botao').addEventListener('click', function(){
        let numeroAleatorio = Math.random();

        document.querySelector('.mensagem-valor').innerText = numeroAleatorio;
        document.querySelector('.mensagem').style.display = 'block';
    })
})