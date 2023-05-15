var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){

   res.writeHead(200,{'Content-Type':'text/html'});
   
   fs.readFile('yazi.html',function(err,data){
    if(err) throw err;
    res.write(data);

   
   fs.writeFile('yazi.html','<h1>Bu değiştirilmis bir yazidir.</h1>',function(err){
    if(err) throw err;
        console.log("Degistirildi!");

   });

 });

}).listen(8080);