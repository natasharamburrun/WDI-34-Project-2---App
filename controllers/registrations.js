const user = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res){
  // console.log(req.body);
  user
    .create(req.body)
    .then((user)=>{
      console.log(user);
      res.redirect('/login');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
