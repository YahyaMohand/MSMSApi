const express = require('express');
const router = express.Router();

const {} = require("../../controllers/admin/services");


const {isAuth,isAdmin} = require('../../controllers/auth')
const {requireSignin} = require('../../validators/auth')
const {userById} = require('../../controllers/user')


// router.get('/cities/:userid',requireSignin,isAuth,isAdmin, getCities)
// router.get('/cities/:id/:userid',requireSignin,isAuth,isAdmin, getCityById)
// router.post('/cities/create/:userid',requireSignin,isAuth,isAdmin,create)
// router.put('/cities/update/:id/:userid',requireSignin,isAuth,isAdmin,updateByID)
// // router.delete('/cities/delete/:id/:userid',requireSignin,isAuth,isAdmin,deleteCity)


router.param('userid', userById);



module.exports = router;