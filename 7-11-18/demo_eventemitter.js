
var http = require('http');
var uc = require('upper-case');
var events = require('events');
var eventEmitter = new events.EventEmitter();


http.createServer(function(req,res){

	var myEventHandler = function(){
		console.log('I had a Scream:');
	}

	// Assign the EventHandler to an Event.
	eventEmitter.on('scream',myEventHandler);

	// Fire the 'Scream' Event
	eventEmitter.emit('scream');
	
}).listen(8080);