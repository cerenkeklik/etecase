const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const app = express();
const cors = require('cors');
const env = require("dotenv").config();

connectDB()

const port = process.env.PORT || 5001;
console.log(port, "-", process.env.PORT)

app.use(express.json())
app.use(cors())
app.use("/api/company", require('./routes/companyRoutes')) //use is a middleware
app.use("/api/product", require('./routes/productRoutes'))
app.use("/api/user", require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server working ${port}`)
})