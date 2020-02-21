const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
  if (err) throw err;
  console.log('Folder created');
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test/', 'hello.txt'), 'Hello, Trent, this is a file created with Node.js\n', err => {
  if (err) throw err;
  console.log('File written to');
});

// File Append
fs.appendFile(path.join(__dirname, '/test/', 'hello.txt'), 'This is a lot of fun!', err => {
  if (err) throw err;
  console.log('File Appended to');
});

// Read File
fs.readFile(path.join(__dirname, '/test/', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename a File
fs.rename(path.join(__dirname, '/test/', 'hello.txt'), path.join(__dirname, '/test/', 'trentsmessage.txt'), (err) => {
  if (err) throw err;
  console.log('Renamed file');
});