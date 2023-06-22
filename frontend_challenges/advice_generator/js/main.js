const adviceId = document.getElementById("advice-id");
const adviceMessage = document.getElementById("advice");
const generatorButton = document.getElementById("generator-button");

async function getData() {
    await fetch("https://api.adviceslip.com/advice") 
      .then(response => response.json())
      .then(data => {
        const apiId = data.slip.id;
        const apiAdvice = data.slip.advice;
        adviceId.innerHTML = apiId;
        adviceMessage.innerHTML = apiAdvice; 
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

generatorButton.addEventListener("click", function() {
    getData();
});

getData();
