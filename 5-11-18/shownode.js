
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    /*  
    ** readFile
    */    

    /*
    fs.readFile('demofile1.html',function(err,data){

        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();

    }); 
    */


    /*  
    ** appendFile
    */ 

    /*
    fs.appendFile('mynewfile1.txt','New File Content:',function(err){

        if(err) throw err;
        console.log("New File saved");

    });
    */


    /*  
    ** Open a File
    */ 
    
    
    fs.open('mynewfilewrite.txt','w',function(err,file){

        if(err) throw err;
        console.log("New File is created for you:");

    });
    

}).listen(8080);

