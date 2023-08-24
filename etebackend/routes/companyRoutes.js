const express = require('express')
const router = express.Router()
const {
  getCompanies,
  addCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require('../controllers/companyController')

router.route('/').get(getCompanies)

router.route('/').post(addCompany)

router.route('/:id').get(getCompanyById)

router.route('/:id').put(updateCompany)

router.route('/:id').delete(deleteCompany)

module.exports = router
