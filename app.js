const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const subscribeRouter = require('./routes/subscribeRouter');
const loginRouter = require('./routes/loginRouter');
const app = express()

//eJS
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(session({
    secret: 'Yz2gaP5A4',
    resave: true,
    saveUninitialized: true
}))

//To use post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/subscribe', subscribeRouter);
app.use('/login', loginRouter);

app.use(express.static('public'));

app.listen(3000)