const express = require('express');
const authController = require('../controllers/auth')

const app = express.Router();

app.get('/signup', authController.signup );

app.post('/login', authController.login);

module.exports = app;