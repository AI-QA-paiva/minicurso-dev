const imagens = document.querySelectorAll('img')
const botao = document.querySelector('button');

const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagens[0].src = data.image;
        imagens[0].alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });

    numeroAleatorio = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagens[1].src = data.image;
        imagens[1].alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = data.status;
    });

    numeroAleatorio = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagens[2].src = data.image;
        imagens[2].alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
    });

   
}

botao.onclick = pegarPersonagem;

