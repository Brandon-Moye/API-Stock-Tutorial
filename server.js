
const express = require('express') //import server framework
const fetch = require('node-fetch')
const { getStockPrices, postTest, getHome, getParamsTest, middleWareInterceptor } = require('./routes/index')
// const { map } = require('cheerio/lib/api/traversing')
const app = express() //boot up of the server
const port = 5353 // define port 

// VARIABLES
const baseUrl = (stock) => `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`

// MIDDLEWARE
app.use(express.json()) //allow project to retrieve JSON that may come in the form of a post request
app.use(require('cors')()) //allow requests for cross origin request

// ROUTES - analogus to API end points

/* 
in express, call the .get verb as a function and pass in 2 arguments
1. the path 
2. the fuction to the execute when the request hits that route 
*/
app.get('/', getHome) //return instructions to use API


app.get('/api/stock', middleWareInterceptor ,getStockPrices)

app.get('/api/testParams/:bananaKeywork', getParamsTest)

app.post('/api/test', postTest)

//listen to incoming requests at this port
app.listen(port, () => console.log(`Server has started on port: ${port}`)) 