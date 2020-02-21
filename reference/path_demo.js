const path = require('path');

// Gets the base file name.
console.log(__filename); // <location to file>/nodejs/reference/path_demo.js
console.log(path.basename(__filename)); // path_demo.js

// Gets the base directory. 
console.log(path.dirname(__filename)); // <location to file>/nodejs/reference/
// Does the same thing. Better to use path module though
console.log(__dirname); // <location to file>/nodejs/reference/

// Gets file extention
console.log(path.extname(__filename)); // ".js"

// Returns an object of all the above commands
console.log(path.parse(__filename)); /* {
  root: '/',
  dir: '/Users/trentteebken/Desktop/nodejs/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}*/

// Concatenate Path
// Joins the arguments together to form a path. 
// This helps with cross OS file path delimiters (Windows uses "\" and Mac uses "/")
console.log(path.join(__dirname, 'test', 'hello.html'));
