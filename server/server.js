var path = require('path');
var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('client'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '../client/layout/layout.html'));
});

app.listen(port, function(){
    console.log('listening on port ' + port);
});