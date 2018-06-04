const Hairdresser = require('../models/hairdresser');

function indexRoute(req, res) {
  Hairdresser
    .find()
    .exec()
    .then((hairdresser) => res.render('index', { hairdresser }));
}

module.exports = {
  index: indexRoute
};
