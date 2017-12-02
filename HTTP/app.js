var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.listen(3000);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/api' , function (req , res) {
res.json({'hello' : 'mon'}) ;
});

app.get('/api/:id' , function (req , res) {
res.render('person' , {ID : req.params.id , qstr : req.query.qpm} ) ;

});

app.use('/assets', express.static(__dirname + "/public"));


app.get('/', function (req , resp) {
    resp.render('index');
});


var urlencodedParser = bodyParser.urlencoded({extended : false});


app.post('/person' , urlencodedParser , function (req, res) {
    res.send('Thank you');
    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});
