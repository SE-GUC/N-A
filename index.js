

const express = require('express')
const mongoose = require('mongoose')

const admins = require('./routes/api/admins')

const app = express()
const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req,res) => res.send('<h1>Candidate Store</h1>'))
app.get('/test', (req,res) => res.send('<h1>Deployed on Heroku</h1>'))

// Direct to Route Handler
//app.use('/api/Candidates',Candidate)

// Direct routes to appropriate files 

app.use('/api/admins', admins)

// Handling 404
//app.use((req, res) => {
//    res.status(404).send({err: 'We can not find what you are looking for'});
 //})

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


