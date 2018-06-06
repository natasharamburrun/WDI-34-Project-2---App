const Portfolio = require('../models/portfolio.js');

function indexRoute(req, res){
  Portfolio
    .find()
    .populate('creator')
    .exec()
    .then( portfolios =>{
      res.render('portfolios/index', {portfolios});
    });
}

function showRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .populate('creator')
    .exec()
    .then( portfolio =>{
      res.render('portfolios/show', {portfolio});
    });
}
function newRoute(req, res){
  if(!res.locals.user.isHairdresser) return res.redirect('/');
  res.render('portfolios/new');
}
// locals.isLoggedIn && locals.user.isHairdresser

function createRoute(req, res){
  const portfolioData = req.body;
  portfolioData['creator'] = res.locals.user.id;
  Portfolio
    .create(req.body)
    .then( portfolio =>{
      return res.redirect(`/portfolios/${portfolio.id}`);
    });
}
function editRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .exec()
    .then((portfolio) =>{
      // if (req.params.id === res.local.user.id){
      res.render('portfolios/edit', {portfolio});
      // } else {
      // return res.redirect('/');
      // }
    });
}
function updateRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .update(req.body)
    .then(() => {
      return res.redirect(`/portfolios/${req.params.id}`);
    });
}
function deleteRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .then( portfolio =>{
      portfolio.remove();
      return res.redirect('/portfolios');
    });
}
function createCommentRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .exec()
    .then(portfolio => {
      portfolio.comments.create(req.body);
      return res.redirect(`/portfolios/${portfolio.id}`);
    });
}
module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute
};
