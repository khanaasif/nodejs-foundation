
var http = require('http');
var fs = require('fs');
var url = require('url');
port = process.argv[2] || 8080;
var path = require('path');

http.createServer(function(req,res){

	var q = url.parse(req.url, true);
	var filename = "html" + q.pathname;	

	console.log(filename);
	console.log('Static file server running at\n  => http://localhost:' + port + q.pathname);  

	fs.exists(filename, function(exists) {

		if(!exists) {
	      res.writeHead(404, {'Content-Type': 'text/html'})
	      res.write('<h2> 404 Not Found\n </h2>')
	      res.end()
	      return
	    }
	
	    fs.readFile(filename,function(err,data){

		if(err){
		  res.writeHead(404,{'Content-Type' : 'text/html'});	
		  return res.end('404 Not Found');
		}

		  res.writeHead(200,{'Content-Type' : 'text/html'});	
		  res.write(data);
		  return res.end();
		});

	});

}).listen(parseInt(port, 10), function(){
  console.log('Static file server running at\n  => http://localhost:' + port + '/');  
})