const express = require('express')
const morgan = require('morgan')
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
require('dotenv').config()

const dbUser = process.env.DB_USER
const pass = process.env.DB_PASS

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.ktphm.mongodb.net/<dbname>?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

app.get('/', (req, res) => {
    res.send('Hello Sajeeb Ahamed')
})

client.connect(err => {
    const collection = client.db("VolunteerNetwork").collection("events");
    app.post('/register', (req, res) => {
        const data = req.body
        res.send(data)
        collection.insertOne(data)
        .then(result => {
            console.log(result);
            res.send(result.insertedCount > 0)
        })
    })
    app.get('/register', (req, res) => {
        collection.find({})
            .toArray((err, doc) => {
                res.send(doc)
            })
    })
    
});



app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    res.send(req.params.id)
})

app.listen(port, () => console.log(`listening to the port ${port}`))
