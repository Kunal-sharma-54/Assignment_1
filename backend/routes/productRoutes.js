const express = require("express");
const {getproducts} = require("../controllers/demodataController")

const router = express.Router();

router.get('/products',getproducts);


module.exports = router;