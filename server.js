const express = require('express');
const path    = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(port, () => {
  console.log("Node app is running at localhost:", port);
});
