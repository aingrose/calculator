
document.body.style.background = "linear-gradient(to right, #94ADD7, #29ADB2), url('your-background-image.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backdropFilter = "blur(5px)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";


let container=document.createElement("div")
container.className="Container col-sm-12 col-md-5 col-lg-3";
container.style.backgroundColor="#29ADB2";
container.style.paddingTop="50px";
container.style.marginTop="100px";
container.style.display="flex";
container.style.justifyContent="center";
container.style.alignItems="center"
container.style.height="80vh";

container.style.border="3px solid #27005D";
container.style.borderRadius="20px";



let calculator=document.createElement("div")
calculator.className="calculator col-sm-12 col-md-12";
calculator.style.backgroundColor="#000";
calculator.style.margin="90px auto";
calculator.style.marginTop="20px";
 calculator.style.backgroundColor="#C5FFF8";
calculator.style.height="70%";
calculator.style.width="100%"
 calculator.style.height="70vh";
calculator.style.borderRadius="12px"
calculator.style.marginTop="29px";
 calculator.style.border="2px solid black";
 calculator.style.width="500px";

let display=document.createElement("div");
display.className="display col-sm-12 col-md-12";
display.style.height=" 20%";
 display.style.padding="6px 49%"
display.style.color="#0FB483";
 display.style.marginBottom="30px"
 display.style.borderRadius="14px";
display.style.marginTop="20px";
 display.style.border = "2px solid black";
 display.style.color="#27005D";
 display.style.marginRight="15px"
;
 display.style.fontSize="80px";
display.style.textAlign="center"
display.style.fontSize="25px"
display.style.paddingTop="50px";
display.style.width="50px";



let button = document.createElement("div")
calculator.className="btn col-sm-3 col-md-12";
button.style.display="grid";
button.style.display = "grid";
 button.style.gap = "5px";
button.style.height = "50%";
 button.style.width = "100%";
// button.style.position = "absolute";
// button.style.bottom = "180px";
// button.style.marginLeft = "25px";
// button.style.borderRight = "18px";
button.style.gridTemplateColumns='repeat(4, 1fr)';
button.style.gap="2px"
button.style.height="60%";

let btns = ['c', '+', '-', 'del', '1', '2', '3', '*', '4', '5', '6', '/', '7', '8', '9', '%', '0','=', 'MC',"."]
let btnFirst=['c', '+', '-', 'del', '1', '2', '3', '*', '4', '5', '6', '/', '7', '8', '9', '%', '0','=', 'MC',"."]


for(let i=0;i<btns.length;i++){
    let btn = document.createElement("button");
    btn.type="button";
    btn.id=btns[i];
    btn.textContent=btnFirst[i];
    btn.className="butn"
    btn.style.height="100%";
    btn.style.borderRadius="5px";    
    btn.style.color="#EBE4D1"
    btn.style.backgroundColor="#27005D"
    btn.style.border="none";
    btn.style.height="100%";
         btn.style.borderRadius="5px"
      
  
        btn.style.border="2px solid black";
    btn.style.outline="none"
    btn.addEventListener("click",function(){
        handleButtonClick(this.innerText)
    })
    button.appendChild(btn);
}

document.addEventListener('keypress',function(event){
    let pressedKey = event.key;
    console.log(pressedKey);
    let correspondingButton = document.getElementById(pressedKey);
    console.log(correspondingButton)
    if(correspondingButton){
    handleButtonClick(pressedKey)
    }
})

calculator.appendChild(display);
calculator.appendChild(button);

container.appendChild(calculator);

document.body.appendChild(container);


function handleButtonClick(buttonArea){
    let input="";
    input+=buttonArea
    switch(input){
        case "del":
            display.innerText=display.innerText.slice(0,-1);
            break;
        case 'c':
            display.innerText="";
            break;
        case "=":
            display.innerText=eval(display.innerText);
            break; 
        case "MC":
            break;   
        default:
            display.innerText+=buttonArea;    
    }
    
}








