const products = require("../data/demoData")


const getproducts = (req,res) =>{
    try {
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message:"failed to load products"
        })
    }
};

module.exports = {getproducts};
