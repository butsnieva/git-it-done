var userFormEl = document.querySelector('#user-form')
var nameInputEl = document.querySelector('#username')

var getUserRepos = function (user) {
    //format the githab api url 
    var apiUrl = 'https://api.github.com/users/' + user + '/repos'

    //make a request to the url
    fetch(apiUrl)
    .then(function(response) {
        response.json()
        .then(function(data){
            console.log(data)
        })
    }) 
}

var formSubmitHandler = function(event) {
    event.preventDefault()
    //get value from input el
    var username = nameInputEl.value.trim()

    if (username) {
        getUserRepos(username)
        nameInputEl.value = ''
    } else {
        alert ('Please enter a github username')
    }
}
userFormEl.addEventListener('submit', formSubmitHandler)

