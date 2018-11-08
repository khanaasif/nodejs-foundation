
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    /* 
    ** create a new File 
    */

    fs.writeFile('mynewfilewritesample.txt','This is the sample Wednessday Text',function(err,file){

        if(err) throw err;
        console.log("New File is created for you,plz check:");

    });
    

    /* 
    ** OPEN A FILE 
    

    fs.open('mynewfilewritesample.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
    
    */

    /* 
    ** DELETES A FILE 
    

    fs.unlink('mynewfilewritesample.txt',function(err) {
        if(err) throw err;
        console.log('File Deleted Successfully:');
    });    
    
    */    


    /* 
    ** RENAMES A FILE
    

    fs.rename('mynewfilewritesample.txt','mynewfilewriterenamed.txt',function(err){

        if(err) throw err;
        console.log("mynewfilewritesample.txt has been changed to mynewfilewriterenamed.txt:");

    });

    */

}).listen(8080);

