'use strict';

var path = process.cwd();
var models = require(path + '/app/models/recipeCreate');
var page = path + '/public/createRecipeForm.html';

function recipeHandler () {
    //adds the recipe to the db
    this.addRecipe = function (req, res) {
        console.log(req.body);
        var spaces; 
        var temp = {}
        var recipe = new models.createRecipe();
        recipe['_creator'] = 'kvansylyvong';
        recipe.title = req.body.title;
        temp.amount = req.body.amount;
        temp.units = req.body.units;
        temp.text = req.body.text;
        recipe.ingredients.push(temp);    
        recipe.save(function(err, result) {
            if (err) throw err;
            res.send('Succesfully added recipe');
        });
    }

    //retrieves the recip from the db
  /*  this.getRecipe = function (req, res) {

    } */

};

module.exports = recipeHandler;
