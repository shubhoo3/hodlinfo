const axios = require('axios');
const Crypto = require('../models/crypto');

exports.fetchAndStoreCryptoData = async (req, res) => {
    try {
        const api = 'https://api.wazirx.com/api/v2/tickers';
        console.log(api)
        const response = await axios.get(api);
        const tickers = response.data;
        console.log(tickers)

        const top10Tickers = Object.values(tickers).slice(0, 10);

        await Crypto.deleteMany({});

        for (const ticker of top10Tickers) {
            await Crypto.create({
                name: ticker.name,
                last: ticker.last,
                buy: ticker.buy,
                sell: ticker.sell,
                volume: ticker.volume,
                base_unit: ticker.base_unit
            });
        }

        res.status(200).send('Data fetched and stored successfully.');
    } catch (error) {
        res.status(500).send('Error fetching data.');
    }
};

exports.getCryptoData = async (req, res) => {
    try {
        const cryptoData = await Crypto.find();
        res.json(cryptoData);
    } catch (error) {
        res.status(500).send('Error retrieving data.');
    }
};
