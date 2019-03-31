const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const db = require('./config/keys').mongoURI
// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

const locations = require('./routes/api/locations')

app.get('/', (req, res) => {

    res.send(`<h1>Welcome </h1>
    <a href="/api/locations">locations</a>`);
})
app.use('/api/locations',locations)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT ||3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))