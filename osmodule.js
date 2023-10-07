const os = require('os');

// Returns the CPU Architecture
console.log(os.arch());

// Returns an array of objects containing information about each logical CPU core
console.log(os.cpus());

console.log(os.devNull);

// Returns the host name of the operating system as a string.
console.log(os.hostname());

// Returns an object containing network interfaces that have been assigned a network address
console.log(os.networkInterfaces());

// The return value is equivalent to process.platform
console.log(os.platform());

// Returns the veriosn of OS
console.log(os.version());