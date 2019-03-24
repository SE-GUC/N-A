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


const consultancyAgencies = require('./routes/api/consultancyAgencies')
const admins = require('./routes/api/admins')
const Co_working_spaces = require('./routes/api/Co_working_spaces')
//const messages = require('./routes/api/messages')
//const notifications = require('./routes/api/notifications')
const projects = require('./routes/api/Projects')
const partner = require('./routes/api/partner')
const Candidate = require('./routes/api/Candidates')
const locations = require('./routes/api/locations')




app.get('/', (req, res) => {

    res.send(`<h1>Welcome </h1>
    <a href="/api/consultancyAgencies">consultancyAgencies</a>
    <a href="/api/Co_working_spaces">Co_working_spaces</a>
    <a href="/api/admins">admins</a>
    <a href="/api/partner">partner</a>
    
    <a href="/api/Projects">Projects</a>
    <a href="/api/Candidates">Candidates</a>
    <a href="/api/locations">locations</a>
    
    
    `);
})

// Direct routes to appropriate files 

app.use('/api/consultancyAgencies', consultancyAgencies)
app.use('/api/admins', admins)
app.use('/api/Co_working_spaces', Co_working_spaces)
app.use('/api/partner', partner)
app.use('/api/Candidates',Candidate)
//app.use('/api/messages', messages)
//app.use('/api/notifications', notifications)
app.use('/api/Projects',projects)
app.use('/api/locations',locations)





// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT ||3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
