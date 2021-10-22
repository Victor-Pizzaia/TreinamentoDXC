const coingecko = require('../services/coingecko');

async function currencies() {
    const dados = await coingecko.getCurrencies();
    console.log(dados);
}

module.exports = currencies;
