const http = require('http');
const os = require('os');

const PORT = 8080;

http.createServer((req, res) => {
    res.write("MAIL SERVER --- Request served from : "+ os.hostname());
    res.end();
}).listen(PORT)