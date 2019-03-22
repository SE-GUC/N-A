const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const consultancyAgencies = require('./routes/api/consultancyAgencies')
const admins = require('./routes/api/admins')
const Co_working_spaces = require('./routes/api/Co_working_spaces')
const messages = require('./routes/api/messages')
const notifications = require('./routes/api/notifications')
const projects = require('./routes/api/Projects')
const partner = require('./routes/api/partner')
const Candidate = require('./routes/api/Candidates')
const locations = require('./routes/api/locations')

app.use(express.json())

app.get('/', (req, res) => {

    res.send(`<h1>Welcome </h1>
    <a href="/api/consultancyAgencies">consultancyAgencies</a>
    <a href="/api/Co_working_spaces">Co_working_spaces</a>
    <a href="/api/admins">admins</a>
    <a href="/api/partner">partner</a>
    <a href="/api/notifications">Notifications</a>
    <a href="/api/messages">Messages</a>
    <a href="/api/Projects">Projects</a>
    <a href="/api/Candidates">Candidates</a>
    <a href="/api/locations">locations</a>
    
    



    `);
})
