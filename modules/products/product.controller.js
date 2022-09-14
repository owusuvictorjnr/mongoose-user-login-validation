const Product = require('./product.model');

exports.getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

exports.createProduct = async (req, res) => {
  const { name, description, quantity, price } = req.body;

  const product = await Product.create({
    name,
    description,
    quantity,
    price,
  });

  res.status(201).json({ product });
};

exports.getSingleProduct = async (req, res) => {
  const {productId} = req.body
  const product = await Product.findById(req.params.productId);

  res.status(200).json({ product });
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndUpdate(
    productId,
    {
      ...req.body,
    },
    { new: true }
  );
  res.status(200).json({ product });
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.status(200).json({ msg: 'Product deleted successfully' });
};
