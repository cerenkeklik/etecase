const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Please add the company name"]
    },
    companyLegalNumber: {
        type: Number,
        required: [true, "Please add the company legal number"]
    },
    incorporationCountry: {
        type: String,
        required: [true, "Please add the incorporation country"]
    },
    website: {
        type: String,
        required: [true, "Please add the website"]
    }
})

module.exports = mongoose.model('Company', companySchema);