const mongoose = require('mongoose');

const { Schema } = mongoose;

const breedSchema = new Schema({
    breed: {
        type: String,
        trim: true
    },
    bredFor: {
        type: String,
    },
    minWeight: {
        type: Number,
    },
    maxWeight: {
        type: Number,
    },
    temperament: {
        type: String,
    },
    minHeight: {
        type: Number,
    },
    maxHeight: {
        type: Number,
    },
    group: {
        type: String,
    },
    foodLevel: {
        type: Number,
    },
    countryOfOrigin: {
        type: String,
    },
    lifespan: {
        type: Number,
    }
    

})



const Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;