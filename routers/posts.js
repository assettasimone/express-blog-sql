//import express
const express = require('express')
//declare router
const router = express.Router()

//import controllers
const blogControllers = require('../controllers/blogControllers')



//index
router.get('/', blogControllers.index)

//show
router.get('/:id', blogControllers.show)

//store
router.post('/', blogControllers.store)

//update
router.put('/:id', blogControllers.update)

//modify
router.patch('/:id', blogControllers.modify)

//destroy
router.delete('/:id', blogControllers.destroy)


module.exports = router