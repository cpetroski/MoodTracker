const express = require('express');
const router =express.Router();

const Mood = require('../models/moods');


//retrieving mood
router.get('/mood', (req, res, next)=>{
    Mood.find(function(err, moods){
        res.json(moods);
    });
});

//add mood
router.post('/mood', (req, res, next)=>{
    let date= new Date();
    const newMood = new Mood({
        date: date,
        mood: req.body.mood,
        description: req.body.description
    });
console.log(newMood)
    newMood.save((err, mood)=>{
        if(err)
        {
            res.json({msg: err});
        }
        else{
            res.json({msg: 'Mood added successfully.'});
        }
    });
});

//delete mood
router.delete('/mood/:id', (req, res, next)=>{
    Mood.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports= router;