const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, resp) => {
    fs.readFile(
        path.join(__dirname, 'reference', 'public', "about.html"), (err, content) => {
            if (err) throw err;
            resp.writeHead(200, {'Content-Type': "text/html"});
            resp.end(content);
        });
});

const PORT =  process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is up and running on port #${PORT} `);
});