'use strict';

var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var jsonfile = require('jsonfile')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* allow CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* API routes */
app.get('/users', function(req, res) {

  setTimeout(function(){

    jsonfile.readFile('./data.json', function(err, obj) {
      res.json(obj);
    });
  }, 1000);
});

app.post('/users', function(req, res) {

  jsonfile.readFile('./data.json', function(err, obj) {

    obj.push(req.body);

    jsonfile.writeFile('./data.json', obj, function (err) {
      console.error(err);
      console.log('Data saved: ', req.body);
      res.json(req.body);
    });
  });

  console.log('Data received for saving', req.body);
});

app.delete('/users/:id', function(req, res) {

  console.log('Deleting:', req.params.id);

  jsonfile.readFile('./data.json', function(err, obj) {

    var index = null;
    for (var i = 0; i < obj.length; i++) {

      if (obj[i].id == req.params.id) {
        index = i;
      }
    }

    if (index) {

      obj.splice(index, 1);

      jsonfile.writeFile('./data.json', obj, function (err) {
        console.log('Deleted! ');
      });
    }

    res.json({
      deleting: req.params.id,
    });
  });
});

app.listen(3033, function() {

  console.log("React Training Backend running on http://localhost:3033" );
});
