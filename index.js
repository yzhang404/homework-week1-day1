const button = document.querySelector('button')
const h1 = document.querySelector('#greeting')
function changeHeading(){
    h1.textContent = 'It is me'
    
}
button.addEventListener('click',changeHeading)