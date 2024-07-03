const express = require('express');
const { fetchAndStoreCryptoData, getCryptoData } = require('../controllers/crytoController');

const router = express.Router();

router.get('/fetch', fetchAndStoreCryptoData);
router.get('/cryptos', getCryptoData);

module.exports = router;
