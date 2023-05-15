var fs = require('fs');

   fs.rename('deneme.html','deneme2.html',function(err){
    if(err) throw err;
        console.log("Dosya ismi degistirildi!");

});