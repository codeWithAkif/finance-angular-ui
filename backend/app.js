const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post')

const app = express();

mongoose.connect("mongodb+srv://codewithakif:Yysr4clRM8KS8wiA@cluster0.9qwbvdq.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("Connection established");
})
.catch((err)=>{
  console.log("Connection failed"+err.message);
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
  const posts = new Post({
    title: req.body.title,
    content: req.body.content
  });

  console.log(posts);
  res.status(201).json({
    message: "Posts successfully added",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fasnflae32",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "asffak32423",
      title: "Second server-side post",
      content: "This is coming from the server!",
    },
  ];
  res.status(200).json({
    message: "Posts fetched succesfully!",
    posts: posts,
  });
});

module.exports = app;
