const express = require('express');
const router = express.Router();
const signUp = require('../controllers/signUp');

router.post('/signUp',signUp);

module.exports = router;