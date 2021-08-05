const mongoose = require('mongoose');

const { Schema } = mongoose;

const dogSchema = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Weight: {
        type: Number,
        required: true,
    },
    Temperament: {
        type: String,
        required: true
    },
    Size: {
        type: String,
        required: true
    },
    

})



const dogs = mongoose.model('dogs', dogSchema);