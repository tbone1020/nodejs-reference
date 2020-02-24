const http = require('http');

// Create server object
http.createServer((request, response) => {
    // Write a response
    response.write('<h1 style="font-family:verdana;">Hello to the browser</h1>'); // Outputs to the browser
    response.end();
}).listen(5000, () => {
    console.log('Server is running...');
})