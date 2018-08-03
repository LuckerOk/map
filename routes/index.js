const express = require('express');
const router = express.Router();

const markersController = require('../controllers/markers.controller');
const usersController = require('../controllers/users.controller');
const authCheck = require('../middleware/authCheck');

//markers
router.get('/markers', markersController.getMarkers);
router.get('/markers/:id', markersController.getMarker);
router.post('/markers', authCheck, markersController.createMarker);
router.delete('/markers/:id', markersController.deleteMarker);

//user
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUser);
router.get('/users/profile', authCheck, usersController.getProfile);
router.post('/users/signup', usersController.createUser);
router.post('/users/signin', usersController.authUser);
router.patch('/users/:id', usersController.patchUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;