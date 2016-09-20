//Require/import the HTTP module
var http 		= require('http');
var inquirer 	= require('inquirer');
var prompt 		= require('prompt');

//Lets define a port we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

//Lets start our server
server1.listen(PORT1, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("You look good today!");
});

server2.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("You look like shit.");
});