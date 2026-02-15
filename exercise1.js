const buttons = document.querySelectorAll('button');
 
function changeColor() {
    this.style.backgroundColor = 'yellow';
}

buttons.forEach(button => {
    button.addEventListener('click', changeColor);
}   );