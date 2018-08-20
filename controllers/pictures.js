const Picture = require('../models/picture.js');


function indexRoute(req, res){
  Picture
    .find()
    .populate('creator')
    .exec()
    .then( pictures =>{
      res.render('pictures/index', {pictures});
    });
}
function showRoute(req, res){
  console.log(req.params);
  Picture
    .findById(req.params.id)
    .exec()
    .then( picture =>{
      res.render('pictures/show', {picture});
    });
}
function newRoute(req, res){
  if(!res.locals.isLoggedIn) return res.redirect('/');
  res.render('pictures/new');
}
function createRoute(req, res){
  const pictureData = req.body;
  pictureData['creator'] = res.locals.currentUser.id;
  Picture
    .create(req.body)
    .then( picture =>{
      return res.redirect(`/pictures/${picture.id}`);
    });
}
function editRoute(req, res){
  Picture
    .findById(req.params.id)
    .exec()
    .then( picture =>{
      res.render('pictures/edit', {picture});
    });
}
function updateRoute(req, res){
  Picture
    .findById(req.params.id)
    .update(req.body)
    .then(() =>{
      return res.redirect(`/pictures/${req.params.id}`);
    });
}
function deleteRoute(req, res){
  Picture
    .findById(req.params.id)
    .then( picture =>{
      picture.remove();
      return res.redirect('/pictures');
    });
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
