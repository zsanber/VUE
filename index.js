const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { createHash } = require('crypto');

//integrate mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/secret')
    .then(() => {
        console.log("MONGO connection open!")
    })
    .catch(err => {
        console.log("MONGO connection error!")
        console.log(err)
    })
const Secret = require('./api/models/secret');


// middleware
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/app/'));

// Hash
function hash(string) {
    return createHash('sha256').update(string).digest('hex');
  }

  
// -- ROOTS
// POST new secret
app.post('/api/secret', async (req, res) => {
    const newSecret = new Secret();
    newSecret.secret = req.body.secret; 
    newSecret.remainingViews = req.body.remainingViews;

    // save expiration time
    var expiresAt = new Date();
    
    if(req.body.expiresAfter > 0) {
        expiresAt = expiresAt.setMinutes(expiresAt.getMinutes() + req.body.expiresAfter);   
    }
    else {
        expiresAt = null;
    }

    newSecret.expiresAt = expiresAt;

    await newSecret.save();
    
    // JSON response
    res.json({
        "hash": newSecret.id,
        "secret": newSecret.secret,
        "createdAt": newSecret.createdAt,
        "expiresAt": newSecret.expiresAt,
        "remainingViews": newSecret.remainingViews
      })    
})

// GET saved secret with hash
app.get('/api/secret/:hash', async (req,res) =>{
    const currentDate = new Date();
    const {hash} = req.params;
    const secret = await Secret.findById({ _id: hash });    
    
    // availability check
    if(secret == null) {
        res.status(404);
    }
    else if (secret.remainingViews < 1 || currentDate > secret.expiresAt) {
        secret.delete();
        res.status(404);
    }
    else {
        secret.remainingViews = secret.remainingViews - 1; 
        await secret.save();

        // JSON response
        res.json({
            "hash": secret.id,
            "secret": secret.secret,
            "createdAt": secret.createdAt,
            "expiresAt": secret.expiresAt,
            "remainingViews": secret.remainingViews
          });          
    }
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})

