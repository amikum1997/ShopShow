//Import Packages
const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const PORT = process.env.PORT || 4000


//Assets Setup
app.use(express.static('public'))
// configure template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/cart', (req, res) => {
    res.render('customers/cart');
})
// Listen Tlo PORT
app.listen(PORT, () => {
    console.log(`Listening To Port ${PORT}`)
})