const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Please add the product name"]
    },
    productCategory: {
        type: String,
        required: [true, "Please add the product category"]
    },
    productAmount: {
        type: Number,
        required: [true, "Please add the product amount"]
    },
    amountUnit: {
        type: Number,
        required: [true, "Please add the amount unit"]
    },
    company: {
        type: String,
        required: [true, "Please add the company"]
    }
})

module.exports = mongoose.model('Product', productSchema);