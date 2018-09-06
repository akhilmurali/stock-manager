let express = require('express');
let app = express();
let port = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.json({msg: 'Hi from remote server'});
});

app.post('/image', (req, res)=>{
    
});

app.listen(port, ()=>{
    console.log('App listening on port: ' + port);
});
