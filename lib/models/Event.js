const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: Number,
    required: true
  },
  recipeId: Number,
  dateOfEvent:{
    type: String,
    format: Date,
  },
  notes: String,
  rating: [Number]
});

module.exports = mongoose.model('Event', schema);
