const router = require('express').Router();

router.get('/', (req, res) => res.render('home'));
router.get('/hairdresser', (req, res) => res.render('hairdresser'));


module.exports = router;
