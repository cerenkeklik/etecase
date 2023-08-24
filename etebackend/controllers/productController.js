const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
  res.status(200).json({ data: products })
})

const addProduct = asyncHandler(async (req, res) => {
  const { productName, productCategory, productAmount, amountUnit, company } =
    req.body

  if (
    !productName ||
    !productCategory ||
    !productAmount ||
    !amountUnit ||
    !company
  ) {
    res.status(400)
    throw new Error('All fields are required!')
  }

  const newProduct = await Product.create({
    productName,
    productCategory,
    productAmount,
    amountUnit,
    company
  })

  res.status(200).json({ message: 'New product added.', data: newProduct })
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }
  res.status(200).json({ data: product })
})

const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error('Product not found')
    }

  let updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )

  res.status(200).json({ message: `product updated`, data: updatedProduct })
})

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error('Product not found')
    }

  let deletedProduct = await Product.findOneAndDelete({_id: req.params.id})

  res.status(200).json({ message: `product deleted`, data: deletedProduct })
})

module.exports = {
  getProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
}
