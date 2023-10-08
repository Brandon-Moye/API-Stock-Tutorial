const express = require('express')
const app = express()
const port = 5353

// MIDDLEWARE
app.use(express.json())
app.use(require('cors')())
// ROUTES

//listen to incoming requests at this port
app.listen(port, () => console.log(`Server has started on port: ${port}`))