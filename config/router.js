const router = require('express').Router();

// const user = require('../controllers/user');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const portfolios = require('../controllers/portfolios');
const pictures = require('../controllers/pictures');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));
router.get('/about', (req, res) => res.render('pages/about'));

router.get('/about', (req, res) => res.render('pages/about'));

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/portfolios')
  .get(portfolios.index)
  .post(portfolios.create);

router.route('/portfolios/new')
  .get(portfolios.new);

router.route('/portfolios/:id/edit')
  .get(portfolios.edit);

router.route('/portfolios/:id')
  .get(portfolios.show)
  .put(portfolios.update)
  .delete(portfolios.delete);

router.route('/portfolios/:id/comment')
  .post(portfolios.createComment);

router.route('/portfolios/:id/comment/:commentId')
  .delete(portfolios.deleteComment);

router.route('/pictures')
  .get(pictures.index)
  .post(pictures.create);

router.route('/pictures/new')
  .get(pictures.new);

router.route('/pictures/:id')
  .get(pictures.show)
  .put(pictures.update)
  .delete(pictures.delete);

router.route('/pictures/:id/edit')
  .get(pictures.edit);

module.exports = router;
