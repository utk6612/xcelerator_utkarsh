var express = require('express');
var jsonfile = require('jsonfile');

var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



var file = './db_json/index.json';
var data;
data = jsonfile.readFileSync(file);


app.get('/cardData', function (req, res) {
    res.json(data);
    res.end();
});
app.post('/addCard',function(req,res){
    data.push(req.body);
    //jsonfile.writeFileSync(file, data);
})

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});