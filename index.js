let express = require('express');
let app = express();
let port = process.env.port || 4000;

app.get('/', (req, res)=>{
    res.json({msg: 'Hi from remote server'});
});

app.listen(port, ()=>{
    console.log('App listening on port: ' + process.env.port);
});