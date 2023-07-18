const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
//personagens
const caracteres = [
    'apenas_um_show',
    'billy',
    'clarencio',
    'darwin',
    'gumball1',
    'historieta',
    'hora_de_aventura',
    'irmao_jorel',
    'jovens',
    'steven',
];
//criar cartas
const createElement = (tag , className)=>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let pri_carta = '';
let seg_carta = '';
//verefica quando ganha
const fim_de_jogo = () =>{
    const desabilitar_carta = document.querySelector('.desabilitar_carta');

    if(desabilitar_carta.length == 20){
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi:${timer}`);
    }
}

//verifica as carta
const checar_carta = () =>{
    const pri_Caractere = pri_carta.getAttribute('data-caractere');
    const seg_Caractere = seg_carta.getAttribute('data-caractere');

    if(pri_Caractere == seg_Caractere){

        pri_carta.firstChild.classList.add('desabilitar_carta');
        seg_carta.firstChild.classList.add('desabilitar_carta');

        pri_carta = '';
        seg_carta = '';

        fim_de_jogo();

    }else{
        setTimeout(() => {
        pri_carta.classList.remove('revelar_carta');
        seg_carta.classList.remove('revelar_carta');

        pri_carta = '';
        seg_carta = '';
        }, 500);
        
    }

}

const revelar_carta = ({target})=>{
    if(target.parentNode.className.includes('revelar_carta')){
        return;
    }
    target.parentNode.classList.add('revelar_carta');

    if(pri_carta == ''){
        target.parentNode.classList.add('revelar_carta');
        pri_carta = target.parentNode;
    }else if (seg_carta == ''){
        target.parentNode.classList.add('revelar_carta');
        seg_carta = target.parentNode;

        checar_carta();
    }

}
const createCarta = (caracteres) =>{

    const carta = createElement('div', 'carta');
    const frente = createElement('div', 'face frente');
    const verso = createElement('div', 'face verso');


    frente.style.backgroundImage = `url('../img/${caracteres}.jpeg')`;

    carta.appendChild(frente);
    carta.appendChild(verso);

    carta.addEventListener('click', revelar_carta);
    carta.setAttribute('data-caractere', caracteres)

    return carta;
}

const loadGame = () =>{

    const duplicarCaracteres = [...caracteres, ...caracteres];
    const embaralhar =duplicarCaracteres.sort(()=> Math.random()- 0.5);
    embaralhar.forEach((caracteres) =>{

        const carta = createCarta(caracteres);
        grid.appendChild(carta);
    });
}

const startTimer = () =>{
    
    this.loop = setInterval(()=>{
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = ()=>{
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}


