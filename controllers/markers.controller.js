const jwt = require('jsonwebtoken');

const Marker = require('../models/markers');
const User = require('../models/users');

function getMarkers(req, res, next) {
  Marker.find()
    .exec(function(err, markers) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({
        data: markers
      });
    });
}

function getMarker(req, res, next) {
  Marker.findById(req.params.id)
    .exec(function (err, marker) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({
        data: marker
      });
    });
}

function createMarker(req, res, next) {
  let decoded = jwt.decode(req.headers['x-access-token']);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
      return res.status(500).json({
        error: 'Not Authenticated'
      });
    }
    let marker = new Marker({
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });
    marker.users.push(user._id);
    marker.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      user.markers.push(result);
      user.save();
      res.status(201).json({
        data: result
      });
    });
  });
}

function deleteMarker(req, res, next) {
  Marker.findById(req.params.id, function (err, marker) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }
    if (!marker) {
      return res.status(500).json({
        error: 'No Marker Found!'
      });
    }
    marker.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({
        data: result
      });
    });
  });
}

module.exports = {
  getMarkers: getMarkers,
  getMarker: getMarker,
  createMarker: createMarker,
  deleteMarker: deleteMarker
};