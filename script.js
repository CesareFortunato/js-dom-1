//VARIABLES

const button = document.querySelector('button');
const lamp = document.getElementById("lampImg");



//SYSTEM

/* button.addEventListener('click', switchButton); */

//https://stackoverflow.com/questions/25028853/addeventlistener-two-functions

button.addEventListener('click', () => {
    switchButton();
    switchLamp();
})




//FUNCTION


/* function switchButton(){
    if(button.innerHTML.includes("ON")){
        button.innerHTML = "OFF"
    }   
    else{
        button.innerHTML = "ON"
    }
} */

function switchButton() {
    button.innerHTML = button.innerHTML.includes("ON") ? "OFF" : "ON";
}

function switchLamp(){
    lamp.src = lamp.src.includes("white_lamp.png") ? "./imgs/yellow_lamp.png" : "./imgs/white_lamp.png"; 
}




