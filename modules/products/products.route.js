const router = require('express').Router;
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('./product.controller');

const productsRouter = router();
productsRouter.route('/').get(getAllProduct).post(createProduct);
productsRouter
  .route('/:productId')
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productsRouter;
