let express = require('express');
let cors = require('cors');
let port = process.env.PORT || 4000;
let bodyParser = require('body-parser');
let router = require('./router');
let dotenv = require('dotenv');
let mongoose = require('mongoose');

dotenv.config();
const app = express();

//User bodyparser middleware:
app.use(bodyParser.json());
//Add cors middleware to allow requests from all sources:
app.use(cors());
//Add router middleware:
app.use('/', router);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URL,(err, conn)=>{
    console.log('Connection established to mongodb');
});

app.listen(port, ()=>{
    console.log('App listening on port: ' + port);
});
