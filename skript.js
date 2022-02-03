const inputNumber = document.querySelector('.number');
const formSubmit = document.querySelector('.form');
const outputText = document.querySelector('.output');
const button = document.querySelector('.but');



formSubmit.addEventListener('submit', numberHours);

function numberHours(event){
    event.preventDefault();
    const hours = parseInt(inputNumber.value);
    let phrase 

    if(!Number.isInteger(hours)){
        phrase = 'Вы ввели не число, введите пожайлуста число =)';
    } else if(hours < 0 || hours > 60){
        phrase = 'Вы ввели не правельный интервал времени =(';
    } else if(hours > 0 && hours <= 15){
        phrase = 'У вас сейчас первая четверть часа';
    } else if(hours > 15 && hours <= 30){
        phrase = 'У вас сейчас вторая четверть часа';
    } else if(hours > 30 && hours <= 45){
        phrase = 'У вас сейчас третья четверть часа';
    } else if(hours > 45 && hours <= 60){
        phrase = 'У вас сейчас четвёртая четверть часа';
    };

    outputText.innerHTML = 
	`
		<p>${phrase}</p>
	`;

    inputNumber.value = '';

    button.innerText = 'Обновить';
    button.onclick = () => history.go()
}
