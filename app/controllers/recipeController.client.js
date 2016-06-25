(function(data) {

var apiUrl = 'http://localhost:8080/submitRecipe';
function sendRecipe() {
    var createForm = document.getElementById('createRecipeForm');
        var enc = '';
        var encPairs = [];
        var data = document.getElementsByTagName('input');
        console.log('length of data: ' + data.length);
        for (var i=0; i<data.length;i++) {
            encPairs.push(encodeURIComponent(data[i].id) + '=' + encodeURIComponent(data[i].value));
        }
        enc = encPairs.join('&').replace(/%20/g, '+');
        ajaxFunctions.ajaxRequest('POST', apiUrl, enc);
}

document.getElementById('submitRecipe').addEventListener("click", function() {
        sendRecipe();
    });
})();
