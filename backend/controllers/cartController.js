// Add to cart controller (PDF requirement)
const addToCart = (req, res) => {
  const productId = req.params.id;

  res.status(200).json({
    message: "Product added successfully",
    productId,
  });
};

module.exports = { addToCart };
