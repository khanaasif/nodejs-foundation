
var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');


http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-type':'text/plain'});
    
    /*
    ** User Defined Modules Demo
    */  
    
    res.write("User Defined Modules Demo:\n");
    res.write("The date and time are currently: " + dt.myDateTime() + "\n");    
    res.write("The New date and time are currently: " + dt.mynewDateTime() + "\n");

    res.write("Query String Demo:\n");

    var q = url.parse(req.url,true).query;

    console.log(q);
    
    var txt = q.year + " " + q.month;
    res.end(txt);

}).listen(3000);