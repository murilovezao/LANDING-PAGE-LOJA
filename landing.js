// Carrossel Principal
const imagens = document.querySelectorAll('.carrossel img');
let indiceAtual = 0;

setInterval(() => {
    imagens[indiceAtual].classList.remove('ativo');
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagens[indiceAtual].classList.add('ativo');
}, 3000);

// Carrossel Pequeno (primeiro)
const pequenasImagens = document.querySelectorAll('#primeiro-carrossel img');
let indicePequenoAtual = 0;

setInterval(() => {
    pequenasImagens[indicePequenoAtual].classList.remove('ativo');
    indicePequenoAtual = (indicePequenoAtual + 1) % pequenasImagens.length;
    pequenasImagens[indicePequenoAtual].classList.add('ativo');
}, 3000);

// Novo Carrossel Pequeno (segundo)
const novasPequenasImagens = document.querySelectorAll('#segundo-carrossel img');
let indiceNovoPequeno = 0;

setInterval(() => {
    novasPequenasImagens[indiceNovoPequeno].classList.remove('ativo');
    indiceNovoPequeno = (indiceNovoPequeno + 1) % novasPequenasImagens.length;
    novasPequenasImagens[indiceNovoPequeno].classList.add('ativo');
}, 3000);
