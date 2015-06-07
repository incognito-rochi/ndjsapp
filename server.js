var http = require('http'),

    url = require('url'),

    fs = require("fs");



var mongoose = require('mongoose');

var testDb = mongoose.createConnection('localhost', 'testDB');

testDb.on('error', console.error.bind(console, 'connection error:'));

testDb.once('open', function callback() {

    console.log("Connection to mainDB is success");

    var testDBSchema = mongoose.Schema({

        _id: Number,

        url: { type: String, default: 'localhost' },

        DBname: { type: String, default: '' },

        pass: { type: String, default: '' },

        user: { type: String, default: '' }

    }, { collection: 'target' });


var express = require('express');

var app = express();


app.listen(8084);


console.log("server start");
