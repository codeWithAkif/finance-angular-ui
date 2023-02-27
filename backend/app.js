const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodeDB");

mongoose.connection.on("connected", () => {
  console.log("Connection established");
});
mongoose.connection.on("error", (err) => {
  console.log("Connection failed" + err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((res, req, next) => {
  req.setHeader("Access-Control-Allow-Origin", "*");
  req.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  req.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  post.save().then(createdPost =>{
     res.status(201).json({
    message: "Posts successfully added",
    postId: createdPost._id
  });
  });
 
});

app.get("/api/posts", (req, res, next) => {

  Post.find().then((documents) => {
    res.status(200).json({
      message: "Posts fetched succesfully!",
      posts: documents,
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Posts deleted succesfully" });
  });
});

module.exports = app;
