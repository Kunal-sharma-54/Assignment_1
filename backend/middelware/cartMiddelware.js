//let take demodata then check

const products = require("../data/demoData")

const checkCart = (req,res,next)=>{
    // take productId and quantity from frontend
    const {productid , quantity } = req.body;

    if(!productid || !quantity){
        return res.status(400).json({
            message:"The productid and quantity is required"
        })
    }
    if(quantity <=0){
        return res.status(400).json({
            message:"the quantity should be higher than 0"
        })
    }
    //lets find the product from the demodata 
    const product = products.find((item)=>item.id === productid);

    if(!product){
        return res.status(400).json({
            message:"product not found"
        })
    }
    next();
}

module.exports = checkCart;