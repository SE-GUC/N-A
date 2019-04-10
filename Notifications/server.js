const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Requires the database globally
require('./model/subscribers_model');
require('./model/Notification');
const app = express();

const not = require('./model/Notification');
// Load Routes
const index = require('./router');

// subscriber route load push
const push = require('./router/push');

// subscriber route load
const subscribe = require('./router/subscribe');
// Load Keys
const db = require('./config/keys').mongoURI
//Handlebars Helpers
// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose
.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.set('trust proxy', true);
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', __dirname + '/public/js');

// Set global vars
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});




  app.post('/send', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'lirtenhubn.a@gmail.com', // generated ethereal user
          pass: 'madolirten1234'  // generated ethereal password
      },
    
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'LirtenHub@Lirten.com', // sender address
        to: req.body.email, // list of receivers
        subject: 'Registration', // Subject line
        text: 'Congrats you are now a LirtenHub Member', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('contact', {msg:'Email has been sent'});
    });
    }); 
// Use Routes
app.get('/mail', (req, res) => {
    res.render('contact');
  });
app.use('/', index);
app.use('/subscribe', subscribe);
app.use('/push', push);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
