const coingecko = require('../services/coingecko');
const chalk = require('chalk');

async function ping() {
    const dados = await coingecko.getPing();
    console.log(chalk.blue(dados));
}

module.exports = ping
