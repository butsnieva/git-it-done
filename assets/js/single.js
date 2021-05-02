var issueContainerEl = document.querySelector('#issues-container')



var getRepoIssues = function (repo) {
    var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc'

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                //pass response data to dom function
                displayIssues(data)
            })
        } else {
            alert('There was a problem with your request!')
        }
    })
}
getRepoIssues('butsnieva/run-buddy')


var displayIssues = function(issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = 'This repo has no open issues!'
        return
    }

    for ( var i = 0; i < issues.length; i++) {
        var issueEl = document.createElement('a')
            issueEl.classList = 'list-item flex-row justify-space-between align-center'
            issueEl.setAttribute('href', issues[i].html_url)
            issueEl.setAttribute('target', '_blank')

        //create span to hold issue title
        var titleEl = document.createElement('span')
            titleEl.textContent = issues[i].title
        issueEl.appendChild(titleEl)
        issueContainerEl.appendChild(issueEl)

        //create a type el
        var typeEl = document.createElement('span')
            //check if issue is an actual issue or a pull request
            if (issues[i].pull_request) {
                typeEl.textContent = '(Pull request)'
            } else {
                typeEl.textContent = '(Issue)'
            }
        issueEl.appendChild(typeEl)
    }
}