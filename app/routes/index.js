'use strict';

var path = process.cwd();
var RecipeHandler = require(path + '/app/controllers/recipeCreateHandler.server.js');

module.exports = function(app) {

var recipeHandler = new RecipeHandler();
app.route('/')
    .get(function(req, res) {
        res.sendFile(path + '/public/index.html');
    });

app.route('/submitRecipe')
    .get(function(req, res) {
        res.sendFile(path + '/public/createRecipeForm.html');
    })
    .post(recipeHandler.addRecipe);
};
