var express = require('express')
var app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(function(req, res, next) {
    console.log("I am in the middle.");
    console.log(req.body.username);
    console.log(req.body.password);
    next();

})

app.get('/', function(req, res) {
    res.send('Get Sent')
})
app.post('/', function(req, res) {
    console.log(req.body);
    res.send('Post Sent')
})
app.put('/', function(req, res) {

    res.send('PUT Sent')
})

app.delete('/', function(req, res) {
    ServiceUIFrameContext.send('Delete Sent')
})

app.listen(3000);