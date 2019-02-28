const express = require('express')

const admins = require('./routes/api/admins')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Admin Store</h1>
    <a href="/api/users">admins</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/admins', admins)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

 //port should 3000
const port = 3001
app.listen(port, () => console.log(`Server up and running on port ${port}`))
