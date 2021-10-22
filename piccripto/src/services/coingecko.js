const axios = require('axios').default;

const api = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
})

async function getPing() {
    const { data } = await api.get('/ping')
    return JSON.stringify(data)
}

async function getCurrencies() {
    const { data } = await api.get('/simple/supported_vs_currencies')
    return data
}

async function getCoinPrice(coins, currencie) {
    const { data } = await api.get('/simple/price', { params: { ids: coins, vs_currencies: currencie }})
    return data;
}

module.exports = {
    getPing,
    getCurrencies,
    getCoinPrice
}
