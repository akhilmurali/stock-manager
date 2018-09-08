const express = require('express');
let router = express.Router();
let controller = require('./controller');
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();

router.get('/', controller.home);

router.post('/image', multipartMiddleware, controller.submit);

module.exports = router;