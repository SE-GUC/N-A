const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const app = express()
const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())



const projects = require('./routes/api/projects')
const ratings = require('./routes/api/ratings')
const skills = require('./routes/api/skills')
const tasks = require('./routes/api/tasks')
const users=require('./routes/api/users')
app.use('/api/projects',projects)
app.use('/api/ratings',ratings)
app.use('/api/skills',skills)
app.use('/api/tasks',tasks)
app.use('/api/users',users)

app.get('/', (req, res) => {
    res.send(`<h1>Hello </h1>`
    );
})





// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT ||3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
