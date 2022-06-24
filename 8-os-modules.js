//OS modules (Built in modules)
const os = require('os')


//info about current user
const user =  os.userInfo()
console.log (user);


// method returns the system's uptime in seconds


console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOs = {
   name: os.type(),
   release: os.release(),
   totalMem: os.freemem() 
}
console.log(currentOs);