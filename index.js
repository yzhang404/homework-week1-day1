const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.name.value
  users.innerHTML += '<p>' + userName+'</p>'

  f.name.value = ''
}

form.addEventListener('submit', handleSubmit)