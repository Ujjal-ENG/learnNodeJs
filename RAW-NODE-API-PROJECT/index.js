/*
Title: Uptime Monitoring Application
Description: A RESTFUL API to monitor up or down time of user defined links
Author: Ujjal Kumar Roy
Date: 19/11/2022
*/

// dependencies

const http = require("http");

//app object -  module scacffolding

const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

//handle Request and Response

app.handleReqRes = (req, res) => {
  res.end("helle =world");
};

// start the server
app.createServer();
