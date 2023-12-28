const buttonsEl = document.querySelectorAll("button"); //selecting all the tag of buttons

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        } else if(buttonValue === "="){
            calculateResult();
        } else{
            appendValue(buttonValue);
        }

    })
}

function clearResult(){
    inputFieldEl.value = "";
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue){
    //inputFieldEl.value = inputFieldEl.value + buttonValue;
    inputFieldEl.value += buttonValue;
}