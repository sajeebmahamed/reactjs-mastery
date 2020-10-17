const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello Sajeeb Ahamed')
})
app.post('/register', (req, res) => {
    const data = req.body
    res.send(data)
    console.log(data);
})

app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    res.send(req.params.id)
})

app.listen(port, () => console.log(`listening to the port ${port}`))
