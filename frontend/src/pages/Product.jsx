import React, { useContext, useEffect, useState } from 'react'
import { getproducts } from '../services/getproduct';
import "./Product.css"
import { CartContext } from '../context/CartContext';


const Product = () => {
    const [products , setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);


    //add useEffect to render the data 
    useEffect(()=>{
        getproducts().then((data)=>{
            setProducts(data);
        });
    },[]);


    function addtocarthandler(product){
        console.log("Add to cart button clicked",product)
    }

  return (
    <div className='products-container'>
        <h1>Products</h1>
        <div className='products-list'>
        {products.map((item)=>(
            <div className='product-card'key={item.id}>
                <p className='product-name'>{item.name}</p>
                <p className='product-price'>${item.price}</p>
                <img className='product-image' src={item.image}/>
                <button onClick={()=>addToCart(item)} >Add To Cart</button>
            </div>
         
        ))}
        </div>
      
    </div>
  )
}

export default Product
 
