var http = require('http'); // ne için: hazırlanan seyi localde yayınlamak için
var url = require('url');

http.createServer(function (req, res){

    var bilgi =  url.parse(req.url, true).query;

    var username1 = "atike";
    var password1 = "123";
    res.writeHead(200, {'Content-Type':'text/html'});
    
    res.write("Kullanici adi: " + bilgi.username + "<br>");
    res.write("Kullanici Sifresi: " + bilgi.password); //Kullanıcıdan gelen (urlnin icinde yazılan username=atike&passwword=112 yazdırma -- http://localhost:8080/?username=atike&password=123)
    res.write("<h2 id='sonuc'></h2>")
    if(username1 == bilgi.username && password1 == bilgi.password){
        res.write("<script>document.getElementById('sonuc').innerHTML = 'Giris Yapildi';</script>");
    }
    else{
        res.write("<script>document.getElementById('sonuc').innerHTML = 'Girilen bilgiler yanlis';</script>");
    }
    res.end();

}).listen(8080);