const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
// Require Router Handlers
const admin = require('./routes/api/admins')
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


const consultancyAgencies = require('./routes/api/consultancyAgencies')
//const messages = require('./routes/api/messages')
//const notifications = require('./routes/api/notifications')
const projects = require('./routes/api/projects')
const partner = require('./routes/api/partner')
const Candidate = require('./routes/api/candidates')
const locations = require('./routes/api/locations')
const Co_working_spaces=require('./routes/api/co_working_spaces')
const skills = require('./routes/api/skills')
const tasks = require('./routes/api/tasks')
//const notifications = require('./Notifications/notif')
app.get('/', (req, res) => {

    res.send(`<h1>Welcome </h1>
    <a href="/api/locations">locations</a>
    test
    <a href="./Notifications/notif">notifications</a>
    <a href="/api/Projects">Projects</a>`
    );
})


// Direct routes to appropriate files 

app.use('/api/consultancyAgencies', consultancyAgencies)
app.use('/api/partner', partner)
app.use('/api/candidates',Candidate)
app.use('/api/skills',skills)
app.use('/api/tasks',tasks)
//app.use('/api/messages', messages)
//app.use('/api/notifications', notifications)
app.use('/api/projects',projects)
//app.use('./Notifications/notif.js',notifications)
app.use('/api/admins',admin)
app.use('/api/locations',locations)
app.use('/api/co_working_spaces',Co_working_spaces)
// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT ||3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
