let Image = require('./models/imageModel');
let s3 = require('s3');
let dotenv = require('dotenv');
dotenv.config();

//Create an S3 Client:
let client = s3.createClient({
    maxAsyncS3: 20,     // this is the default
    s3RetryCount: 3,    // this is the default
    s3RetryDelay: 1000, // this is the default
    multipartUploadThreshold: 20971520, // this is the default (20 MB)
    multipartUploadSize: 15728640, // this is the default (15 MB)
    s3Options: {
        accessKeyId: process.env.s3_access_key,
        secretAccessKey: process.env.s3_secret,
    }
});
console.log(process.env.s3_access_key);
console.log(process.env.s3_secret);

//GET home route:
const home = (req, res) => {
    //Server Test route:
    res.json({ status: 'OK' });
}

//GET latest snap of the inventory from the database:
const imageLatest = (req, res) => {
    console.log(req.url);
    Image.findOne({})
        .then((image) => {
            res.json(image);
        })
        .catch((err) => {
            res.json(err);
        });
}

//POST a snap to the datbase:
const submit = (req, res) => {
    console.log(req.files);
    let key = "fridge" + Date.now();
    var params = {
        localFile: req.files.fridge.jpg.path,
        s3Params: {
            Bucket: "bucket.invenlook.storage",
            Key: key,
        },
    };
    var uploader = client.uploadFile(params);
    uploader.on('error', function (err) {
        console.log(err);
        console.error("unable to upload:", err.stack);
        res.status(500).json({ status: 'ERR', msg: 'Unable to upload image' });
    });
    uploader.on('progress', function () {
        console.log("progress", uploader.progressMd5Amount,
            uploader.progressAmount, uploader.progressTotal);
    });
    uploader.on('end', function () {
        console.log("done uploading");
        let image = new Image({
            url: 'https://s3.amazonaws.com/bucket.invenlook.storage/' + key,
            attributes: []
        });
        image.save()
            .then((image) => {
                res.status(200).json({ status: 'OK', msg: 'successfully uploaded image into database', image });
            })
            .catch((err) => {
                res.status(500).json({ status: 'ERR', msg: 'Error Uploading data to the datbase', err });
            });
    });
}

module.exports = { home, imageLatest, submit };