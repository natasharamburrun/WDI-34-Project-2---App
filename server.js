const express = require('express');
const ejsLayouts = require('express-ejs-layouts');


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

//listen out of the incoming requests on PORT 4000
app.listen(4000, ()=> console.log('Express is listening to port 4000'));
