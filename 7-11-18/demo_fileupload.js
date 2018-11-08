
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


http.createServer(function(req,res){

	if(req.url == '/fileupload'){

		var form = new formidable.IncomingForm();
		
		form.parse(req,function(err,fields,files){

			var oldPath = files.filetoupload.path;
			var newpath = files.filetoupload.name;
			
			fs.rename(oldPath,newpath,function(err){

				if(err) throw err;
				res.write('File Uploaded and Moved:');
				res.end();
			});
		});

	} else {
		
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="/fileupload" method="POST" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');		

	}

}).listen(8080);
