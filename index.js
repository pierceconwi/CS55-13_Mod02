// LOAD REQUIRED NODE HTTP MODULES
const http = require ("http");
const fs = require("fs").promises;

// CREATE LISTENER FUNCTION
const listenJ = function(rqst, rspns) {
  console.log(rqst.url);
  if ( rqst.url === "/") {
    fs.readFile( __dirname + "/mypage.html" ).then(
      myData => {
        rspns.setHeader('Content-Type', 'text/html; charset=UTF-8');
        rspns.writeHead(200);
        rspns.end(myData)
      }
    );
  } else {
    fs.readFile( __dirname + "/secrets.json").then(
      myData => {
        rspns.setHeader("Content-Type", "application/json; charset=UTF-8");
        rspns.writeHead(200);
        rspns.end(myData);
      }
    );
  }
};


// CREATE SERVER INSTANCE
const myServer = http.createServer(listenJ);
const host = "0.0.0.0";
const port = "8080";

// LISTEN FOR HTTP REQUESTS
myServer.listen(
  port, host, () => {console.log('server online at ' + host + ', port ' + port);}
);