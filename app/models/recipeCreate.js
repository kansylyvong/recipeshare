'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var createRecipeSchema = new Schema({
    _creator: { type: String },
    title: String,
    ingredients: [{
            amount: Number,
            units: String,
            text: String
    }]
});

var createRecipe = mongoose.model('createRecipe', createRecipeSchema);

module.exports = {
    createRecipe: createRecipe
}
