
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){

  var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

  var q = url.parse(adr,true);

  /* The Parse method returns an object containing
  url properties */

  console.log(q.host);
  console.log(q.pathname);
  console.log(q.search);


  /* The Query string returns an object with all
  the querystring parameters as properties */

  // var qdata = q.query();
  // console.log(qdata.month);
    

}).listen(8080);

