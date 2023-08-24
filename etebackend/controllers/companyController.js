const asyncHandler = require('express-async-handler')
const Company = require('../models/companyModel')

const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find()
  res.status(200).json({ data: companies })
})

const addCompany = asyncHandler(async (req, res) => {
  const { companyName, companyLegalNumber, incorporationCountry, website } =
    req.body

  if (
    !companyName ||
    !companyLegalNumber ||
    !incorporationCountry ||
    !website
  ) {
    res.status(400)
    throw new Error('All fields are required!')
  }

  const newContact = await Company.create({
    companyName,
    companyLegalNumber,
    incorporationCountry,
    website,
  })

  res.status(200).json({ message: 'New company added.', data: newContact })
})

const getCompanyById = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id)
  if (!company) {
    res.status(404)
    throw new Error('Company not found')
  }
  res.status(200).json({ data: company })
})

const updateCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id)
  if (!company) {
    res.status(404)
    throw new Error('Company not found')
  }

  let updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )

  res.status(200).json({ message: `company updated`, data: updatedCompany })
})

const deleteCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id)
  if (!company) {
    res.status(404)
    throw new Error('Company not found')
  }

  let deletedCompany = await Company.findOneAndDelete({_id: req.params.id})

  res.status(200).json({ message: `company deleted`, data: deletedCompany })
})

module.exports = {
  getCompanies,
  addCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
}
