var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Setting path for static files
app.use(express.static(path.join(__dirname,'public')));
//Connecting to all the routes
app.use('/', routes);

app.listen(3000, function(){
    console.log('Server listening at port 3000...')
});
// app.listen(3000,'10.9.152.103' || 'localhost',function() {
//     console.log('Application worker ' + process.pid + ' started...');
//   }
//   );
