var express = require('express');
var router = express.Router();

const uploadToS3 = require('../helpers/s3');

router.get('/upload', function (req, res, next) {
    res.render('upload', {
        title: 'Upload file'
    });
});

router.post('/upload', uploadToS3.single('file'), (req, res, next) => {
    res.json({
       success: true
    });
});

module.exports = router;
