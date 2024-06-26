const express = require('express')
const app = express()
const port = 8080

app.use(express.static('client'))

app.get('/', (req, res) => {
    res.send('')
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})  