// mongodb://localhost:27017    
// npm init
// npm i mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teste',
 {useNewUrlPaser : true, useUniFiedTopoLogy: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function(){
    console.log("Estamos conectados ao banco")
})