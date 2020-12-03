const express = require("express");
const mongoose = require('mongoose')
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const comments = require("./routes/api/comments");
const replies = require("./routes/api/replies")

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


  app.get("/", (req, res) => res.send("Hello World, welcome to the cloud"));

  app.use(passport.initialize());
  require('./config/passport')(passport);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use("/api/users", users);
  app.use("/api/posts", posts);
  app.use("/api/comments", comments);
  app.use("/api/replies", replies)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));



