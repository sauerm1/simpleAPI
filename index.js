// const express = require('express');
// const https = require('https');
// const fs = require('fs');
// const port = 3000;

// var key = fs.readFileSync(__dirname + '/../certs/selfsigned.key');
// var cert = fs.readFileSync(__dirname + '/../certs/selfsigned.crt');
// var options = {
//   key: key,
//   cert: cert
// };

// app = express()
// app.get('/', (req, res) => {
//    res.send('Now using https..');
// });

// var server = https.createServer(options, app);

// server.listen(port, () => {
//   console.log("server starting on port : " + port)
// });

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req, res) => res.send('Hello World'));

app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))