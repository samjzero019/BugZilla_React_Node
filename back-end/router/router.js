const express = require('express')


const errorController = require('../controllers/error')
const authController = require('../controllers/auth')
const router = express.Router()


router.post('/signup', authController.handleSignUp)

// in case api route is not registered!
router.use('/*', errorController.error404)


module.exports = router
