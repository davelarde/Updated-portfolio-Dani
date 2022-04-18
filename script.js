console.log("hello");
// to redirect and download pdf
jQuery(document).ready(function($) {
    $('a[href$=".pdf"]')
    .attr('download', '')
    .attr('target', '_blank');
});

// to display api github
var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
var requestUrl ="https://api.github.com/users/davelarde/repos";
fetch(requestUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for(var i=0; i<data.length; i++){
        var userName = document.createElement("h3");
        var userUrl = document.createElement("p");
        userName.textContent = data[i].owner
        userUrl.textContent =data[i].deployments_url
        // usersContainer.append(userName);
        usersContainer.append(userUrl);
        
    }
});
}
fetchButton.addEventListener('click', getApi);
