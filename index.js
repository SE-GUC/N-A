const express = require('express')

const messages = require('./routes/api/messages')
const notifications = require('./routes/api/notifications')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
    <a href="/api/notifications">Notifications</a>
    <a href="/api/messages">Messages</a>

    `);
})

// Direct routes to appropriate files 
app.use('/api/messages', messages)
app.use('/api/notifications', notifications)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
