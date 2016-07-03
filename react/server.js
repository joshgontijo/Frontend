var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

//var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.use(cors());
//app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var comments = [];


app.get('/api/comments', function(req, res) {
    res.json(comments);
});

app.post('/api/comments', function(req, res) {
    console.log(req.body);
    comments.push(req.body);
    res.sendStatus(200);
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
