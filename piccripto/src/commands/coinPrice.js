const coingecko = require('../services/coingecko');
const chalk = require('chalk');

async function coinPrice(coins, currencie = 'brl') {
    const dados = await coingecko.getCoinPrice(coins, currencie);
    if (Object.keys(dados).length < 1) {
        console.log(chalk.red('Moeda não encontrada'));
        return;
    }
    Object.entries(dados).forEach(coin => {
        const moeda = coin[0];
        const valor = coin[1];
        console.log(`${chalk.yellow(moeda)}: ${chalk.green(valor[currencie])}`)
    })
}

module.exports = coinPrice;
