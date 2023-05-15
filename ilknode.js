var http = require('http');//http getir.
var x =require('./ilkmodule');

http.createServer(function (req,res){//üzerine server oluştur, req ve res talep ve cevap şeklinde iki değişken tanımlıyor.

    res.writeHead(200, {'Content-Type':'text/html'});//içerik tipini tanımlıyoruz text/html.
    res.write('<h1 style="color:#5032a8">HELLO WORLD!</h1>');
    res.write('<p style="color:#9d32a8">Bu benim ilk node projem!</p>');

    res.write('<b id="saat"></b>');
         
    setInterval(function () {
        res.write("<script> document.getElementById('saat').innerHTML = '"+ x.Zaman() + "'; </script>");

    },1000)

    //res.end();//ekrana yazdıracağımız bilgi, burası body kısmıdır.

}).listen(8080);//hangi porta bağlayacağımızı söylüyoruz. 8080 veya 8000 http'in standart portudur.