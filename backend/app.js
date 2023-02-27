const express = require("express");

const app = express();

app.use((res, req, next) => {
  req.setHeader("Access-Control-Allow-Origin", "*");
  req.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  req.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
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
