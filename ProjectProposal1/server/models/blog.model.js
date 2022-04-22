const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    
    name: { 
        type: String,
        require: true,
        minlength: [3, "Must be 3 letters"]
    },
    
    reviews : [{
        blogTitle:{
            type: String,
            require: true,
            minlength: [3, "must be 3 characters"]
        },

        userName:{
            type: String,
            require: true,
            minlength: [3 , "must be 3 characters"]
    
    
        },
        rating:{
            type: Number,
            require:true,
        },
    
        review:{
            type: String,
            require: true,
            minlength: [3 , "must be 3 characters"]
    
    
        }
      }]


}, { timestamps: true });
module.exports = mongoose.model('Blog', BlogSchema);