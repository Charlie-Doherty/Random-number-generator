const button = document.querySelector('.generate');
const text = document.querySelector('p');
const inputs = document.querySelectorAll('input');

button.addEventListener('click', textAnimation);
inputs.forEach(input => input.addEventListener('change', setTextWithLimits));

function generateRandomNumber(min, max){
    min = document.querySelector('#min').value;
    max = document.querySelector('#max').value;

    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}

function textAnimation(){
    const interval = 
    setInterval(() => text.textContent = generateRandomNumber(min, max).toLocaleString(), 80);

    setTimeout(() => clearInterval(interval), 320);
}

function setTextWithLimits(e){
    if(e.target.value <= 0){
        e.target.value = 1;
    }
    if(e.target.value > 100000000){
        e.target.value = 100000000;
    }
}