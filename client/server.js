const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Listening on PORT 5000');
})

app.get('/api/data', (req, res) => {
    res.json({message: 'Server Connected'})
})