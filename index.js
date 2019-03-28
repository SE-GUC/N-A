const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./config/keys').mongoURI
// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const admins = require('./routes/api/admins')

app.get('/', (req, res) => {
    res.send(`<h1>Welcome </h1>
    <a href="/api/admins">admins</a>
    `);
})

// Direct routes to appropriate files 

app.use('/api/admins', admins)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT ||3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
