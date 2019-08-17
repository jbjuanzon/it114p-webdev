const express = require('express');
const pathUtil = require('../util/path');
const router = express.Router();


router.get('/',(req,res) => {
   res.sendFile(pathUtil.views+'shop.html');
});

module.exports = router;