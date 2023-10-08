
const express = require('express')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const routesIndex = require('./routes/index')
// const { map } = require('cheerio/lib/api/traversing')
const app = express()
const port = 5353

// VARIABLES
const baseUrl = (stock) => `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`

// MIDDLEWARE
app.use(express.json())
app.use(require('cors')())

// ROUTES - analogus to API end points
app.get('/', (req, res) => {
  res.sendStatus(200).send({message: 'Thank you for trying our API'})  
})

app.get('/api/stock', routesIndex.getStockPrices)

app.post('/test', (req, res) => {
    const body = req.body
    const { message } = body
    console.log('THIS IS THE MESSAGE' + message)
    res.sendStatus(200)
})
//listen to incoming requests at this port
app.listen(port, () => console.log(`Server has started on port: ${port}`))