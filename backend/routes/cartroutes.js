const express = require('express');
const router = express.Router();

const {addToCart} = require("../controllers/cartController")

router.get('/cart/:id',addToCart);

module.exports = router;