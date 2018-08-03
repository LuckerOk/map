const jwt = require('jsonwebtoken');

module.exports = function authCheck(req, res, next) {
  jwt.verify(req.headers['x-access-token'], 'secret', function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  });
};