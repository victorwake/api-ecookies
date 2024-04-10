const express = require('express');
const router = express.Router();
const { first_call_get } = require('../controllers/index')
const { first_call_post } = require('../controllers/index')

//llamados a los json de catalogos de https://www.aedashomes.com/
router.get('/dataget', first_call_get);
router.get('/datapost', first_call_post);

module.exports = router;