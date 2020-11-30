const express = require("express");
const mongoose = require('mongoose')
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');


const users = require("./routes/api/users");


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use("/api/users", users);



app.get("/", (req, res) => res.send("Hello World, welcome to the cloud"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


