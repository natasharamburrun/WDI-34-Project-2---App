const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

const router = require('./config/router');
const hairdresser = require('./models/hairdresser');
const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

//
// const databaseURI ='mongodb://localhost/hair-app';

//
// app.get('/', (req, res)=> res.send('<h1>Hello World!</h1>'));


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(ejsLayouts);

app.use(express.static(`${__dirname}/public`));

// setup bodyParser to handle Post request
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride((req)=>{
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));


//handle a request
app.get('/',(req, res) => res.render('home', {
  isHomepage: true
}));

// app.get('/hair', (req, res) => res.render('hair', {
//   title: 'Hairdressers',
//   products: [{
//     name: 'Celine',
//     image: 'https://www.celine.com'
//   }]
// }));

app.use(router); // MUST BE PLACED JUST BEFORE app.listen

//listen out of the incoming requests on PORT 4000
app.listen(4000, ()=> console.log('Express is listening to port 4000'));
