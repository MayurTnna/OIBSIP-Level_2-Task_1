let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
         if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'button') {
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } 
        else if(buttonText == '√'){
            screen.value = Math.sqrt(screenValue);
        }
        else if(buttonText == 'ln'){
            screen.value = Math.log(screenValue);
        }
         else if(buttonText == '⬅') {
            screen.value = screen.value.slice(0,-1);
            screenValue = "";   
        }
        else if(buttonText == 'e') {
            screen.value = Math.exp(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
       
    })
 }

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
     document.body.classList.toggle('dark');
});

var colorChanger = document.getElementsByTagName("label")[0];
colorChanger.addEventListener("click",function(){
    document.querySelector('h1').style.color = "white";
});
     
