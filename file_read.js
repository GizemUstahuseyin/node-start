var http =require('http');
var fs=require('fs');


http.createServer(function(req,res){

    var yazi = "gizem";


    fs.readFile('deneme.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.write("<script> document.getElementById('yazi').innerHTML = 'Gizem' </script>");
        return res.end();
    })


}).listen(8080);