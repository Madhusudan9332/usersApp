const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const userRoutes = require("./route/user");
var cors = require('cors')

mongoose
  .connect("mongodb://localhost:27017/UserApp")
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("Error DB connection"));


app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: "Api is working"
  })
});
app.use(userRoutes)
app.listen(10000, () => console.log(`Server is up and running at port 10000`));