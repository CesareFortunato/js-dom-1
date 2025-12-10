//VARIABLES

const button = document.querySelector('button');



//SYSTEM

button.addEventListener('click', testButton);




//FUNCTION


/* function testButton(){
    if(button.innerHTML.includes("ON")){
        button.innerHTML = "OFF"
    }   
    else{
        button.innerHTML = "ON"
    }
} */

function testButton() {
    button.innerHTML = button.innerHTML.includes("ON") ? "OFF" : "ON";
}



