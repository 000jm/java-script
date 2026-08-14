import { Greeter } from './module.js'
// const greeterInstance = require('./module.js')

// console.log(greeterInstance.greet('joao'))
const miguel = new Greeter('miguel')
console.log(miguel.greeting);
console.log(miguel.name);

// usar apenas uma forma de import