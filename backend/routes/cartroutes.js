const express = require('express');
const router = express.Router();

const {addToCart} = require("../controllers/cartController")
const checkCart = require("../middelware/cartMiddelware")


router.post('/cart',checkCart,addToCart);

module.exports = router;