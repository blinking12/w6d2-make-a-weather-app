var counter = 0
var button = document.createElement('button')
button.innerHTML = 'Click Me'
button.classList.add('btn','btn-default','btn-block')

button.addEventListener('click', function() {
    counter++
    button.innerHTML = counter
})

document.getElementById('dom').appendChild(button)
