var express = require('express');
var routes = express.Router();
var url = require('url');
var PythonShell = require('python-shell');

routes.get('/', function(req, res){

    res.status(200);
    res.render('index');

});

//added a route for testing python script invocation
routes.get('/pi', testpy);

function testpy(req, res){
    PythonShell.run('../casereserve/model.py', function(err, data){
        if (err) res.send(err);
        res.send(data.toString())
    });
}

module.exports = routes;