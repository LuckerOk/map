const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/users');

function getUsers(req, res, next) {
  User.find()
    .exec(function(err, users) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({
        data: users
      });
    });
}

function getUser(req, res, next) {
  User.findById(req.params.id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({
        data: user
      });
    });
}

function getProfile(req, res, next) {
  let decoded = jwt.decode(req.headers['x-access-token']);
  User.findById(decoded.user._id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({
        data: {
          firstName: user.firstName,
          username: user.username
        }
      });
    });
}

function createUser(req, res, next) {
  let user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    firstName: req.body.firstName,
  });
  user.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }
    res.status(201).json({
      data: result
    });
  });
}

function authUser(req, res, next) {
  User.findOne({username: req.body.username}, function(err, user) {
    if (err) {
      return res.status(401).json({
        error: 'Username failed'
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        error: 'Password failed'
      });
    }
    let token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      token: token
    });
  });
}

function patchUser(req, res, next) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      if (!user) {
        return res.status(500).json({
          error: 'No User Found!'
        });
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 10);

        user.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              error: err
            });
          }
          res.status(200).json({
            data: {
              firstName: result.firstName,
              username: result.username
            }
          });
        });
      }
      if (req.body.firstName) {
        user.firstName = req.body.firstName;

        user.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              error: err
            });
          }
          res.status(200).json({
            data: {
              firstName: result.firstName,
              username: result.username
            }
          });
        });
      }
    });
}

function deleteUser(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      if (!user) {
        return res.status(500).json({
          error: 'No User Found!'
        });
      }
      else {
        res.status(200).json({
          data: user
        });
      }
    });
}

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  getProfile: getProfile,
  createUser: createUser,
  authUser: authUser,
  patchUser: patchUser,
  deleteUser: deleteUser
};