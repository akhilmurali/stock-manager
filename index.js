var express = require('express');
var cors = require('cors');
var port = process.env.PORT || 4000;
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{
    console.log(req.url);
    res.json({msg: 'Hi from remote server'});
});

app.post('/image', multipartMiddleware, (req, res)=>{
    console.log(req.body);
    console.log(req);
    console.log(req.files, '################################');
    res.json({status: 'ok'});
});

app.get('/image/latest', (req, res)=>{
    console.log(req.url);
    res.json({status: 'ok'});
});

app.listen(port, ()=>{
    console.log('App listening on port: ' + port);
});
