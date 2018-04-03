var express = require('express');
var routes = express.Router();
var url = require('url');

routes.get('/', function(req, res){

    res.status(200);
    res.render('index');

});

module.exports = routes;