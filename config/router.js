const router = require('express').Router();

router.get('/', (req, res) => res.render('home'));
router.get('/about', (req, res) => res.render('about'));
router.get('/hair', (req, res) => res.render('hair'));



module.exports = router;
