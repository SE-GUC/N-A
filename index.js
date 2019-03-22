const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers
const consultancyAgencies = require('./routes/api/consultancyAgencies')
const admins = require('./routes/api/admins')
const Co_working_spaces = require('./routes/api/Co_working_spaces')
const messages = require('./routes/api/messages')
const notifications = require('./routes/api/notifications')
const projects = require('./routes/api/Projects')
const partner = require('./routes/api/partner')
const Candidate = require('./routes/api/Candidates')
const locations = require('./routes/api/locations')
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

// Direct to Route Handlers
app.use('/api/consultancyAgencies', consultancyAgencies)
app.use('/api/admins', admins)
app.use('/api/Co_working_spaces', Co_working_spaces)
app.use('/api/partner', partner)
app.use('/api/Candidates',Candidate)
app.use('/api/messages', messages)
app.use('/api/notifications', notifications)
app.use('/api/Projects',projects)
app.use('/api/locations',locations)


app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started on ${port}`))