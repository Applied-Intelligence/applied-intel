var restify = require('restify');
var builder = require('botbuilder');

//Setup Restify server

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
});

//Create chat connector for communicating with Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppID,
    appPassword: process.env.MicrosoftAppPassword
});
//Listen for messages from users
server.post('/api/messages', bot);

//Receive messages from the user
var bot = new builder.UniversalBot(connector, function(session){
    session.send("You said: %s", session.message.text);
})