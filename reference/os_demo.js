const os = require('os');

// What platform you are on.
console.log(os.platform()); // Darwin (Mac). Win32 (Windows)

// CPU Architecture
console.log(os.arch()); // x64

// CPU Core Info
console.log(os.cpus()); // Lists your CPU information

// Free Memory
console.log(os.freemem()); // The total amount of free memory available

// Total Memory
console.log(os.totalmem());

// Home Dir
console.log(os.homedir());

 // Number of seconds your system has been running
console.log(os.uptime()); // Mine is 625378 seconds 😲