const Portfolio = require('../models/Portfolio.js');

function indexRoute(req, res){
  Portfolio
    .find()
    .populate('creator')
    .exec()
    .then( portfolio =>{
      res.render('portfolio/index', {portfolio});
    });
}

function showRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .exec()
    .then( portfolio =>{
      res.render('pictures/show', {portfolio});
    });
}
function newRoute(req, res){
  if(!res.locals.isLoggedIn) return res.redirect('/');
  res.render('portfolio/new');
}
function createRoute(req, res){
  const portfolioData = req.body;
  portfolioData['creator'] = res.locals.user.id;
  Portfolio
    .create(req.body)
    .then( portfolio =>{
      return res.redirect(`/portfolio/${portfolio.id}`);
    });
}
function editRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .exec()
    .then( portfolio =>{
      res.render('portfolio/edit', {portfolio});
    });
}
function updateRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .update(req.body)
    .then( portfolio =>{
      return res.redirect(`/portfolio/${portfolio.id}`);
    });
}
function deleteRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .then( portfolio =>{
      portfolio.remove();
      return res.redirect('/portfolio');
    });
}
function createCommentRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .exec()
    .then(portfolio => {
      portfolio.comments.create(req.body);
      return res.redirect(`/portfolio/${portfolio.id}`);
    });
}
function createPictureRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .exec()
    .then(portfolio => {
      portfolio.comments.create(req.body);
      return res.redirect(`/portfolio/${portfolio.id}`);
    });
}
function editPictureRoute(req, res){
  Portfolio
    .findById(req.params.id)
    .exec()
    .then(portfolio => {
      portfolio.comments.create(req.body);
      return res.redirect(`/portfolio/${portfolio.id}`);
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
  createComment: createCommentRoute,
  createPicture: createPictureRoute,
  editPictureRoute: editPictureRoute
};
