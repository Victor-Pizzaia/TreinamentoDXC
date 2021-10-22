const coingecko = require('../services/coingecko');
const chalk = require('chalk');

async function calc(coin, quant, currencie = 'brl') {
    const dados = await coingecko.getCoinPrice(coin, currencie);
    if (Object.keys(dados).length < 1) {
        console.log(chalk.red('Moeda não encontrada'));
        return;
    }
    const [[moeda, valor]] = Object.entries(dados);
    const valorTotal = valor[currencie] * quant;
    console.log(
        `${chalk.yellow(moeda)}: ${chalk.magenta(valorTotal.toFixed(2))} ${chalk.green(currencie)}`
    )
}

module.exports = calc;
