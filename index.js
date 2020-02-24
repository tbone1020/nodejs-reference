const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, resp) => {
    let checkIfOnHomePage = req.url === "/" ? "index.html" : req.url;
    let filePath = path.join(__dirname, 'reference', 'public', checkIfOnHomePage);
   
    // Extention of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = "text/html"; 

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = "text/javascript"
            break;
        case '.css':
            contentType = "text/css";
            break;
        case '.json':
            contentType = "application/json";
            break;
        case '.png':
            contentType = "image/png";
            break;
        case '.jpg':
            contentType = "image/jpg";
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                // Page not found
                fs.readFile(
                    path.join(__dirname, 'reference', 'public', '404.html'), (err, content) => {
                        resp.writeHead(200, {'Content-Type': "text/html"});
                        resp.end(content, 'utf8');
                    })
            } else {
                // Some server
                resp.writeHead(500);
                resp.end(`Server Error ${err.code}`);
            }
        } else {
            // Success
            resp.writeHead(200, {'Content-Type': contentType});
            resp.end(content, 'utf8');
        }
    })
});

function getPageContent(path) {
    
}

const PORT =  process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is up and running on port #${PORT} `);
});