const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  measurement: [
    'teaspoon(s)', 
    'tablespoon(s)', 
    'cup(s)', 
    'ounce(s)', 
    'gram(s)'
  ],
  directions: [String]
});

module.exports = mongoose.model('Recipe', schema);
