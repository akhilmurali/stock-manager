let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let imageSchema = new Schema({
    url: {
        type: String,
        reqiured: true
    },
    uploaded_At:{
        type: Date,
        default: Date.now()
    },
    contents:{
        type: Array,
        reqiured: true,
        default: []
    }
});

let Image = mongoose.model('Image', imageSchema);
module.exports = Image;