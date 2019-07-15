const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
 


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json());
app.use(express.static('public'));

const homeRouter = require('./routes/home');
const bookRouter = require('./routes/book');

const sequelize = require('./configs/sequelize');

const Book = require('./models/book');

app.use(homeRouter);
app.use('/book', bookRouter);


app.listen(3208, () => {
    console.log('server started');
    sequelize.sync();
})


