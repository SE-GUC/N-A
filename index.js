<<<<<<< HEAD
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
// Require Router Handlers
const Candidate = require('./routes/api/candidates')
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
app.use(cors())


// Entry point
app.get('/', (req,res) => res.send(`<h1>Candidate Store</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

// Direct to Route Handler
app.use('/api/Candidates',Candidate)


app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started on ${port}`))
=======
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
    const app = express()

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


const consultancyAgencies = require('./routes/api/consultancyAgencies')
const Co_working_spaces = require('./routes/api/co_working_spaces')
//const messages = require('./routes/api/messages')
//const notifications = require('./routes/api/notifications')
const projects = require('./routes/api/projects')
const partner = require('./routes/api/partner')
const Candidate = require('./routes/api/candidates')
const locations = require('./routes/api/locations')
//const notifications = require('./Notifications/notif')
app.get('/', (req, res) => {

    res.send(`<h1>Welcome </h1>
    <a href="/api/locations">locations</a>
    <a href="./Notifications/notif">notifications</a>
    <a href="/api/Projects">Projects</a>`
    );
})


// Direct routes to appropriate files 

app.use('/api/consultancyAgencies', consultancyAgencies)
app.use('/api/co_working_spaces', Co_working_spaces)
app.use('/api/partner', partner)
app.use('/api/candidates',Candidate)
//app.use('/api/messages', messages)
//app.use('/api/notifications', notifications)
app.use('/api/projects',projects)
//app.use('./Notifications/notif.js',notifications)

app.use('/api/locations',locations)
// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT ||3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
>>>>>>> 6cccc947f8adbbd0fd110877ab985bef159f0592
