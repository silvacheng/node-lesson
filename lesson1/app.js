var express = require('express');
var app = express();
app.get('./', function(req, res) {
    res.send('Hello World~');
});

app.listen(6666, function() {
    console.log('app is listening at port 6666~');
})