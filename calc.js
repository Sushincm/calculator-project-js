let screen = document.getElementById('screen');

//Values Added in input 
function btns(e){
    screen.value += e;
}
//Clear Screen
function clearScreen(){
    screen.value = "";
}
//Number Eval
function equalBtn(){
    let text = screen.value;
    let result = eval(text); 
    screen.value = result;   
}