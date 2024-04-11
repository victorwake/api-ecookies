const express = require('express');
const router = express.Router();
const { first_call_get, first_call_post } = require('../controllers/catalogoAedas')
const { cookiePermitida, cookieAdd, cookieTercerosAdd } = require('../controllers/cookies')


//llamados a los json de catalogos de https://www.aedashomes.com/
router.get('/dataget', first_call_get);
router.get('/datapost', first_call_post);

// add cookies
router.get('/cookieAdd', cookieAdd);
router.get('/cookieAddTerceros', cookieTercerosAdd);
router.get('/cookiePermitida', cookiePermitida);

module.exports = router;