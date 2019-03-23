const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers
const Candidate = require('./routes/api/Candidates')
const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>Candidate Store</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

// Direct to Route Handler
app.use('/api/Candidates',Candidate)


app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started on ${port}`))