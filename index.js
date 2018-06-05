const express = require('express');
const morgan = require('morgan');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

const router = require('./config/router');
const user = require('./models/user');
const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);
//
// const databaseURI ='mongodb://localhost/hair-app';
//
// app.get('/', (req, res)=> res.send('<h1>Hello World!</h1>'));


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(ejsLayouts);

app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

// setup bodyParser to handle Post request
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));
app.use((req, res, next) => {
  if(!req.session.userId) return next();
  console.log('session middleware');
  console.log(req.session);
  user
    .findById(req.session.userId)
    .populate({path: 'portfolio', populate: {path: 'creator'}})
    .populate('portfolio')
    .exec()
    .then((user) =>{
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      next();
    });
});

app.use(methodOverride((req)=>{
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//handle a request
// app.get('/',(req, res) => res.render('home', {
//   isHomepage: true
// }));

app.use(router);

app.listen(port, ()=> console.log(`Express is listening to port ${port}`));
