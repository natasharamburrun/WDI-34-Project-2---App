const router = require('express').Router();

const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const pictures = require('../controllers/pictures');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/hairdresser/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/client/login')
  .get(sessions.new)
  .post(sessions.create);

// router.route('/login')
// .get(registrations.new)
// .post(registrations.create);
//
// .get(registrations.new)
// .post(registrations.create);
//
// router.route('/logout')
//   .get(sessions.delete);
//
// router.route('/pictures')
//   .get(pictures.index)
//   .post(pictures.create);
// router.route('/pictures/new')
//   .get(pictures.new);
// router.route('/pictures/:id')
//   .get(pictures.show)
//   .put(pictures.update)
//   .delete(pictures.delete);
// router.route('/pictures/:id/edit')
//   .get(pictures.edit);
//
// router.route('/pictures/:id/comment')
//   .post(pictures.createComment);



module.exports = router;
