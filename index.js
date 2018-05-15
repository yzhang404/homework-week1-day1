const button = document.querySelector('button')

function changeHeading(){
    const header = document.querySelector('h1#wonder')
    header.textContent = document.getElementById("text").value
}

button.addEventListener('click',changeHeading)