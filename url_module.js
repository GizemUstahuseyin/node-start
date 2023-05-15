var url=require('url');
var adr="http://localhost:8080/giris.html?username=gizem&password=123";
var q=url.parse(adr,true);

console.log(q.host);//'localhost:8080'
console.log(q.pathname);//'/giris.html'
console.log(q.search);//'?username=gizem&password=123'
console.log(q.query);//object {username:gizem, password:123}

//yukarıdaki 4 adımda konsolda kullanıcının formda  girdiği veriler görüntülendi

var bilgi =q.query;

console.log(bilgi.username); //username ve şifreyi ayırma işlemi
console.log(bilgi.password);