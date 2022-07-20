const cardParagraph = document.querySelector('.card-paragraph')
const btn = document.querySelector('.generate-btn')


adviceId = [];

function getAdvice(data) {
    
    if (adviceId.includes(data.slip.id)) {
        apiCall();
    } else {
        cardParagraph.innerHTML = data.slip.advice
    }

    adviceId.push(data.slip.id);
    console.log(adviceId)
}

 
function apiCall() {    
    fetch('https://api.adviceslip.com/advice', {
        method: 'GET'
    })
    .then (res => res.json())
    .then (data => {
        getAdvice(data);
    })
    .catch (error => {
        alert(`Make sure to connect to the internet, ${error}`)
    })
}

btn.addEventListener('click', apiCall);