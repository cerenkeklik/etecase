const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  if (!username | !password) {
    res.status(400)
    throw new Error('All fields are required!')
  }

  const userAvailable = await User.findOne({ username })

  if (userAvailable) {
    res.status(400)
    throw new Error('User already registered!')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    username,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({ _id: user.id, username: user.username })
  } else {
    res.status(400)
    throw new Error('Registiration failed')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  if (!username | !password) {
    res.status(400)
    throw new Error('All fields are required!')
  }

  const user = await User.findOne({ username })

  if (user && await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    )
    res.status(200).json({ accessToken })
  } else {
    res.status(401)
    throw new Error('Login failed.')
  }
})

//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ user: req.user })
})

module.exports = { registerUser, loginUser, currentUser }
