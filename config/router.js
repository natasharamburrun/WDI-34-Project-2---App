const router = require('express').Router();

const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const portfolio = require('../controllers/portfolio');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/hair')
  .get(portfolio.index)
  .post(portfolio.create);
router.route('/hair/new')
  .get(portfolio.new);
router.route('/hair/:id')
  .get(portfolio.show)
  .put(portfolio.update)
  .delete(portfolio.delete);
router.route('/hair/:id/edit')
  .get(portfolio.edit);

router.route('/hair/:id/comment')
  .post(portfolio.createComment);

module.exports = router;
