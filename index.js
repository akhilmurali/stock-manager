let express = require('express');
let cors = require('cors');
let app = express();
let port = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res)=>{
    res.json({msg: 'Hi from remote server'});
});

app.post('/image', (req, res)=>{
    res.status({status: 'ok'});
});

app.get('/image/latest', (req, res)=>{
    console.log(req.body);
    res.status({status: 'ok'});
});

app.listen(port, ()=>{
    console.log('App listening on port: ' + port);
});
