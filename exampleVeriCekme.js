var http=require('http');
var url =require('url');
var fs=require('fs');

http.createServer(function(req,res){

    var sayfa=url.parse(req.url,true);
    var username=sayfa.username;
    
    fs.appendFile('veri.txt', username ,function(err){
     
     if(err) {
         res.writeHead(404,{'Content-Type':'text/html'});
         return res.end("404 Dosyaniz Bulunamadi.")
     }
     
     res.writeHead(200,{'Content-Type':'text/html'});
     console.log("Eklendi!");  
     return res.end();

       });

}).listen(8080);