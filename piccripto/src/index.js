#!/usr/bin/env node

const { program } = require('commander');
const package = require('../package.json');
const { ping, currencies, coinPrice, calc } = require('./commands/index');

program.version(package.version); // Coloca a versão do programa

program
    .command('ping')
    .description("Mostra no console o nome digitado")
    .action(ping)

program
    .command('currencies')
    .description("Mostra no console as currencies disponiveis")
    .action(currencies)

program
    .command('price <coins> [currencie]')
    .description("Mostra no console as o valor atual da moeda na currencie escolhida")
    .action(coinPrice)

program
    .command('calc <coin> <quant> [currencie]')
    .description("Mostra no console o valor que você tem em criptos")
    .action(calc)

program.parse(process.argv)
