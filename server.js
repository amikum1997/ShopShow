//Import Packages
const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.render('home');
})

//Assets Setup
app.use(express.static('public'))
// configure template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs');

// Listen Tlo PORT
app.listen(PORT, () => {
    console.log(`Listening To Port ${PORT}`)
})