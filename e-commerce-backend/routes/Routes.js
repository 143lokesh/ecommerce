const express=require('express');
const { signUp } = require('../controllers/SignUp');
const { Login } = require('../controllers/Login');
const { addproducts } = require('../controllers/AddProducts');
const { allProducts } = require('../controllers/products');
const router= express.Router();


router.post("/signup",signUp);
router.post('/login',Login);
router.post('/addproduct',addproducts);
router.get('/product',allProducts);

module.exports=router;