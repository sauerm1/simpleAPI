var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('../certs/client-key.pem'),
  cert: fs.readFileSync('../certs/client-cert.pem')
};

// Create a service (the app object is just a callback).
var app = express();
app.get('/',(req, res) => {
    console.log(req.rawHeaders)
    res.send('Hello World')
});


// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);

// const express = require('express');

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.get('/',(req, res) => res.send('Hello World'));

// app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))