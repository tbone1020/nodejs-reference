const url = require('url');
const myUrl = new URL('http://tteebken.com/portfolio.php?user=trentteebken&loggedin=true');

// Serialized URL
console.log(myUrl.href); // Outputs "http://tteebken.com/portfolio.php?user=trentteebke&loggedin=true"
console.log(myUrl.toString()); // Outputs the same thing

// Host (Root domain)
console.log(myUrl.host); // tteebken.com

// Hostname
console.log(myUrl.hostname); // Same thing as .host The difference is ports (tteebken.com:8080) aren't included on hostname

// Path Name
console.log(myUrl.pathname); // /portfolio.php

// Serialized Query
console.log(myUrl.search); // ?user=trentteebke&loggedin=true

// Object of search parameters
console.log(myUrl.searchParams); //  'user' => 'trentteebke', 'loggedin' => 'true' }

// Add Parameters
myUrl.searchParams.append("age","32");
console.log(myUrl.searchParams); // { 'user' => 'trentteebken', 'loggedin' => 'true', 'age' => '32' }
