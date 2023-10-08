
const baseUrl = (stock) => `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`

const { fetchPrice } = require("../utils")
const fetch = require('node-fetch')
async function getHome(req, res) {
        res.sendStatus(200).send({message: 'Thank you for trying our API'})  

}

async function getStockPrices (req, res) {
    /**
     * you can retrieve info from network request from: query, parameter, body
     * the body only exists with a post request
     */
    const { stock } = req.query
    console.log('STOCK TICKER: ' + stock)
    if (!stock) {
        return res.sendStatus(403)
    }

    try {
        const stockDataUrl = baseUrl(stock)
        const stockRes = await fetch(stockDataUrl)
        const data = await stockRes.text()
        const prices = fetchPrice(data)
        console.log(prices)
        res.status(200).send({prices})
    } catch (err) {
        console.log('THERE WAS AN ERROR', err)
        res.sendStatus(500)
    }
}

const postTest = (req, res) => {
    const body = req.body
    const { message } = body
    console.log('THIS IS THE MESSAGE' + message)
    res.sendStatus(200)
}

module.exports = { getStockPrices, getHome, postTest }