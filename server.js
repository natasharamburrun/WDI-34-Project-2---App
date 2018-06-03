const express = require('express');
const ejsLayouts = require('express-ejs-layouts');


const router = require('./config/router');


const app = express();
//
// app.get('/', (req, res)=> res.send('<h1>Hello World!</h1>'));


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(ejsLayouts);

app.use(express.static(`${__dirname}/public`));

//handle a request
app.get('/',(req, res) => res.render('home', {
  isHomepage: true
}));

app.get('/hair', (req, res) => res.render('hair', {
  title: 'Hairdressers',
  products: [{
    name: 'Celine',
    description: 'Micro luggage handbag in calfskin',
    style: 'Hand Carry',
    price: 2050.00,
    size: 'M',
    color: 'grey',
    material: 'leather',
    image: 'https://www.celine.com'
  }]
}));

app.use(router); // MUST BE PLACED JUST BEFORE app.listen

//listen out of the incoming requests on PORT 4000
app.listen(4000, ()=> console.log('Express is listening to port 4000'));
