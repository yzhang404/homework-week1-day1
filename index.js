const button = document.querySelector('button')
const form = document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const heading =document.querySelector('h1#greeting')
    const f = ev.target
    const userName=f.value // target is the form today
    heading.textContent= userName
}

form.addEventListener('submit',handleSubmit)
/*
function changeHeading(){
    const header = document.querySelector('h1#wonder')
    header.textContent = document.getElementById("text").value
}

button.addEventListener('click',changeHeading)*/