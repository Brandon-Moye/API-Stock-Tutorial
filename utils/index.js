const cheerio = require('cheerio')

function fetchPrice(html) {
    const $ = cheerio.load(html) //info we are getting from the url
    const prices = $('td:nth-child(6)').get().map(val => $(val).text())
    return prices
}

module.exports = { fetchPrice }