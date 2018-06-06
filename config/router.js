const router = require('express').Router();

const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const portfolios = require('../controllers/portfolios');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

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

module.exports = router;
