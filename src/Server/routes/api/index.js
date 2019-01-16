const express = require('express');

const router = express.Router();

router.use('/users', require('./users'));

router.use('/weight', require('./weights'));

module.exports = router;