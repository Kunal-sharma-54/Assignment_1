//take cart empty 

let cart = []; // so the products come like [{1},{2}]

//add logic to addToCart 
const addToCart = (req,res)=>{
    //take productid and quantity from frontend 
    const {productid , quantity } = req.body;

    //check if product is present or not 
    const product = cart.find((item) => productid == item.productid)

    if(product){
        product.quantity+=quantity;
    }else{
        cart.push({productid,quantity})
    }

    res.status(200).json({
        message:"product added sucessful",
        cart
    }) 
};


module.exports = { addToCart };
//for destructuring the cart