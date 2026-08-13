
// function add(a, b) {
//     return a + b
// }

// function subtract(a, b) {
//     return a - b
// }

// console.log('module');

// module.exports = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b
// }

// exports.add = function add(a, b) {
//     return a + b
// }

// exports.greeting = 'hello world'

// exports.subtract = function add(a, b) {
//     return a - b
// }

class Greeter {
    constructor(name) {
        this.greeting = 'helloo'
        this.name = name
    }
    greet(name) {
        return `${this.greeting}, ${this.name}`
    }
}

const greeterInstance = new Greeter('joao')
// module.exports = greeterInstance
exports.add = function add(a, b) {
    return a + b
}

// usar apenas uma forma de export