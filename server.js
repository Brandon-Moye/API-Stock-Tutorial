const express = require('express')
const cheerio = require('cheerio')
const app = express()
const port = 5353

// MIDDLEWARE
app.use(express.json())
app.use(require('cors')())

// ROUTES - analogus to API end points
app.get('/', (req, res) => {
  res.sendStatus(200).send({message: 'Thank you for trying our API'})  
})

app.get('/api/stock', (req, res) => {
    /**
     * you can retrieve info from network request from: query, parameter, body
     * the body only exists with a post request
     */
    const { stock } = req.query
    if (!stock) {
        return res.sendStatus(403)
    }
})

app.post('/test', (req, res) => {
    const body = req.body
    const { message } = body
    console.log('THIS IS THE MESSAGE' + message)
    res.sendStatus(200)
})
//listen to incoming requests at this port
app.listen(port, () => console.log(`Server has started on port: ${port}`))