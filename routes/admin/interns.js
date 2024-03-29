const express = require('express');
const router = express.Router();

const { getInterns } = require("../../controllers/admin/interns");

const {isAuth,isAdmin} = require('../../controllers/auth')
const {requireSignin} = require('../../validators/auth')
const {userById} = require('../../controllers/user')


router.get('/interns/:userid',requireSignin,isAuth,isAdmin, getInterns)
// router.post('/carousel/create/:userid',requireSignin,isAuth,isAdmin,create)
// router.get('/carousel/:id/:userid',requireSignin,isAuth,isAdmin,getCarouselById)
// router.put('/carousel/update/:id/:userid',requireSignin,isAuth,isAdmin,updateCarousel)
// // router.delete('/carousel/delete/:id/:userid',requireSignin,isAuth,isAdmin,deleteCarousel)
// router.post('/carousel/upload/:userid',requireSignin,isAuth,isAdmin,images);

router.param('userid', userById);


module.exports = router;