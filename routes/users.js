const express = require('express');
const router = express.Router();

// Register Page, validate
router.get('/register', (req, res, next) => {
    res.send('Register page');
});

// Login Page
router.get('/login', (req, res, next) => {
    res.send('Login Page');
});

// Profile Page
router.get('/profile', (req, res, next) => {
    res.send('Profile Page');
});

// GET User
router.get('/user', (req, res, next) => {
   res.send('user page');
});

// POST User
router.post('/user', (req, res, next) => {
   res.send('user page');
});

module.exports = router;
