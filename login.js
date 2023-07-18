const input = document.querySelector('.login_input');
const button = document.querySelector('.login_botao');
const form = document.querySelector('.login_form');

const validar_input = ({target})=>{
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
    
}

const handleSubmit =()=>{
    event.preventDefault();
    localStorage.setItem('Player', input.value);
    window.location = 'paginas/game.html';
}
input.addEventListener('input', validar_input);
form.addEventListener('submit', handleSubmit)