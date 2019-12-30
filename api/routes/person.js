const express = require('express');
const router = express.Router();
const personController = require('../controller/person')


router.get('/', personController.hello);

module.exports = router;