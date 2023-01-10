const Secret = require('../models/secret');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/secret')
    .then(() => {
        console.log("MONGO connection open!")
    })
    .catch(err => {
        console.log("MONGO connection error!")
        console.log(err)
    })

const moreTestData = [
    {
        secret: "A kulcsot a kaspó alatt tartom", 
        remainingViews: 2, 
    },
    {
        secret: "Télen a % lámpa alatt.",
    },
    {
        secret: "Hamburgban sokat esik az eső.",  
        remainingViews: 1
    }
];


Secret.insertMany(moreTestData)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })