const express = require('express')

const consultancyAgencies = require('./routes/api/consultancyAgencies')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Consultancy Agencies page</h1>
    <a href="/api/consultancyAgencies">consultancyAgencies</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/consultancyAgencies', consultancyAgencies)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
