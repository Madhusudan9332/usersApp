const express = require('express');
const userRoutes = require('../controller/user')

const router = express.Router();
router.get('/api/users',userRoutes.getUsers)
router.post('/api/user',userRoutes.postUsers)
// router.get('/sample')/

module.exports = router