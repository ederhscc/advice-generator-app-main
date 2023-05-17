const idConselho = document.querySelector('#number-advice');
const advice = document.querySelector('#quote');

document.getElementById("button-advice").addEventListener("click", criarConselhoAleatorio);

async function criarConselhoAleatorio(){
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);    
    const conselho = await resposta.json();
    idConselho.innerHTML = `<p>ADVICE #${conselho.slip.id}</p>`;
    advice.innerHTML = `<p>${conselho.slip.advice}</p>`;
}

criarConselhoAleatorio();