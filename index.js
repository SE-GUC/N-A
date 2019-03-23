

const express = require('express')
const mongoose = require('mongoose')


const consultancyAgencies = require('./routes/api/consultancyAgencies')



const app = express()
const db = require('./config/keys').mongoURI
// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {

    res.send(`<h1>Welcome </h1>
    <a href="/api/consultancyAgencies">consultancyAgencies</a>
    
    



    `);
})
app.get('/test', (req,res) => res.send('<h1>Deployed on Heroku</h1>'))

// Direct routes to appropriate files 

app.use('/api/consultancyAgencies', consultancyAgencies)


// Handling 404
//app.use((req, res) => {
//    res.status(404).send({err: 'We can not find what you are looking for'});
 //})

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


