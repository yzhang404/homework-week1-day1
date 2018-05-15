const button = document.querySelector('button')
const form = document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users =document.querySelector('#users')
    const f = ev.target
    const userName=f.userName.value // target is the form today
    users.textContent += " " + userName
}

form.addEventListener('submit',handleSubmit)
/*
function changeHeading(){
    const header = document.querySelector('h1#wonder')
    header.textContent = document.getElementById("text").value
}

button.addEventListener('click',changeHeading)*/