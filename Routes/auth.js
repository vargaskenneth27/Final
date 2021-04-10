const express = require('express');
const authController = require('../controllers/auth')

const app = express.Router();

app.post('/signup', authController.signup );

app.post('/login', authController.login);

module.exports = app;