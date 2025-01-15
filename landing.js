// Carrossel Principal
const imagens = document.querySelectorAll('.carrossel img');
let indiceAtual = 0;

setInterval(() => {
    imagens[indiceAtual].classList.remove('ativo');
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagens[indiceAtual].classList.add('ativo');
}, 3000);  // Troca de imagem a cada 3 segundos

// Carrossel Pequeno (primeiro)
const pequenasImagens = document.querySelectorAll('#primeiro-carrossel img');
let indicePequenoAtual = 0;

setInterval(() => {
    pequenasImagens[indicePequenoAtual].classList.remove('ativo');
    indicePequenoAtual = (indicePequenoAtual + 1) % pequenasImagens.length;
    pequenasImagens[indicePequenoAtual].classList.add('ativo');
}, 3000);  // Troca de imagem a cada 3 segundos

// Carrossel "Sobre Nós"
const imagensSobreNos = document.querySelectorAll('#carrossel-sobre-nos img');
let indiceSobreNos = 0;

setInterval(() => {
    imagensSobreNos[indiceSobreNos].classList.remove('ativo');
    indiceSobreNos = (indiceSobreNos + 1) % imagensSobreNos.length;
    imagensSobreNos[indiceSobreNos].classList.add('ativo');
}, 3000);  // Troca de imagem a cada 3 segundos


// Card Redes Sociais
const botaoRedesSociais = document.querySelector('a[href="#rede-sociais"]');
const cardRedesSociais = document.getElementById('card-redes-sociais');

botaoRedesSociais.addEventListener('click', (event) => {
    event.preventDefault();  // Evita o comportamento padrão do link
    cardRedesSociais.style.display =
        cardRedesSociais.style.display === 'block' ? 'none' : 'block';
});

// Fecha o card se o usuário clicar fora dele
document.addEventListener('click', (event) => {
    if (!cardRedesSociais.contains(event.target) && event.target !== botaoRedesSociais) {
        cardRedesSociais.style.display = 'none';
    }
});
