const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./public/images'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { text: 'This is EJS'});
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { text: 'This is EJS'});
});
app.get('/contact', (req, res) => {
    res.render('contact', { text: 'This is EJS'});
});

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});