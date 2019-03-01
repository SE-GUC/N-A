

const express = require('express')

const admins = require('./routes/api/admins')
const Co_working_spaces = require('./routes/api/Co_working_spaces')



const partner = require('./routes/api/partner')



const app = express()
app.use(express.json())

app.get('/', (req, res) => {


    
    <a href="/api/Co_working_spaces">Co_working_spaces</a>
<a href="/api/users">admins</a>
    
    <a href="/api/partner">partner</a>
    


    `);
})

// Direct routes to appropriate files 

app.use('/api/admins', admins)
app.use('/api/Co_working_spaces', Co_working_spaces)

app.use('/api/partner', partner)




// Handling 404
//app.use((req, res) => {
//    res.status(404).send({err: 'We can not find what you are looking for'});
 //})

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


