const mongoose = require('mongoose');


const MoodSchema =mongoose.Schema({
    date:{
        type: Date,
        required: true
    },
    mood: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Mood = module.exports = mongoose.model('Mood', MoodSchema);