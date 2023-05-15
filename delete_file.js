var fs = require('fs');

   fs.unlink('silinecek.html',function(err){
    if(err) throw err;
        console.log("Silindi!");

});