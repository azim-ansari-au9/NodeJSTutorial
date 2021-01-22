const os = require('os');
console.log(os.platform());
console.log(`${os.arch()} bit`);
console.log(os.cpus().length+ "");
