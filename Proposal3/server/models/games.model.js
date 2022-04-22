const mongoose = require("mongoose");

const GamesSchema = {
  name: {
    type: String,
    required: [true, "name is required"],
    minLength: [3, "Name must be at least 3 characters"],
  },

  rating: {
    type: String, //change to number
    required: [true, "name is required"],
    minLength: [3, "Name must be at least 3 characters"],
  },

  review: {
    type: String, //change to number
    required: [true, "name is required"],
    minLength: [3, "Name must be at least 3 characters"],
    
},
};

module.exports = mongoose.model("Game", GamesSchema);