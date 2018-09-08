let express = require('express');
let cors = require('cors');
let app = express();
let port = process.env.PORT || 4000;
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{
    console.log(req.url);
    res.json({msg: 'Hi from remote server'});
});

app.post('/image', (req, res)=>{
    console.log(req.body);
    res.json({status: 'ok'});
});

app.get('/image/latest', (req, res)=>{
    console.log(req.url);
    res.json({status: 'ok'});
});

app.listen(port, ()=>{
    console.log('App listening on port: ' + port);
});
