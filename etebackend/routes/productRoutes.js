const express = require('express')
const router = express.Router()
const {
  getProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')

router.route('/').get(getProducts)

router.route('/').post(addProduct)

router.route('/:id').get(getProductById)

router.route('/:id').put(updateProduct)

router.route('/:id').delete(deleteProduct)

module.exports = router
