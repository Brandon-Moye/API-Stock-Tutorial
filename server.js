
const express = require('express')
const fetch = require('node-fetch')
const { getStockPrices, postTest, getHome } = require('./routes/index')
// const { map } = require('cheerio/lib/api/traversing')
const app = express()
const port = 5353

// VARIABLES
const baseUrl = (stock) => `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`

// MIDDLEWARE
app.use(express.json())
app.use(require('cors')())

// ROUTES - analogus to API end points
app.get('/', getHome)

app.get('/api/stock', getStockPrices)

app.post('/test', postTest)
//listen to incoming requests at this port
app.listen(port, () => console.log(`Server has started on port: ${port}`))