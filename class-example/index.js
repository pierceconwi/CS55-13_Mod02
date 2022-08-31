// load core node http module
const http = require("http");

// load the core node filesystem (fs) module, using js promises instead of callbacks
const fs = require("fs").promises;

// create a function to respond to http requests
const requestListener = function(req, res) {
  // output request url
  console.log(req.url);

  if (req.url === "/") {
    // check request url, if root, return html file
    // special variable __dirname refers to the absolute path where node code is running
    fs.readFile( __dirname + '/class-example/page.html' ).then(
      contents => {
        // set http response header entry
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        // return 200 OK http status code
        res.writeHead(200);
        // send back file contents and close response
        res.end(contents);
      }
    );
  } else {
    // RESUME HERE RESUME HERE RESUME HERE
    
  }
}

// create instance of http server
const server = http.createServer(requestListener);

// define the TCP port and IP address for our http server to listen to
const host = "0.0.0.0"; // repl.it will override from localhost to workspace webview hostname URL
const port = "8080"; // repl.it overrides this to use port 443 (SSL https)

// call the listen() method to start listening to http requests
server.listen(
  port,
  host,
  () => {
    console.log('Server is running');
  }
);