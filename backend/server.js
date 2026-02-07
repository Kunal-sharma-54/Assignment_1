const express = require('express');
require("dotenv").config()
const app = express();
const products = require("./routes/productRoutes")

const cartroute = require("./routes/cartroutes");
const cors = require('cors')



//middelware
app.use(express.json());
app.use(cors())


app.get('/',(req,res)=>{
    res.send("hello world ");
});

app.use('/api',products);

app.use('/api',cartroute);


const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})