var functions = require('firebase-functions');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var http = require('http');

var app = express();
app.use(morgan('combined'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/checkJSON.jpeg',(req,res)=>{
    res.sendFile(path.join(__dirname, 'ui', 'checkJSON.jpeg'));
});


app.get('/ace.js',(req,res)=>{
    res.sendFile(path.join(__dirname, 'ui', 'ace.js'));
});

app.get('/jquery.highlight-within-textarea.css',(req,res)=>{
    res.sendFile(path.join(__dirname, 'ui', 'jquery.highlight-within-textarea.css'));
});


app.get('/jquery.highlight-within-textarea.js',(req,res)=>{
    res.sendFile(path.join(__dirname, 'ui', 'jquery.highlight-within-textarea.js'));
});

exports.app = functions.https.onRequest(app);
