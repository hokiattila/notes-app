//const firstName = require('./utils')
const validator = require('validator')
const add = require('./utils')
const getNotes = require('./notes')
const chalk = require('chalk')
//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Attila.')
//fs.appendFileSync('notes.txt','\nIm 24 years old.')
const sum = add(4,-2)
//const name = 'Attila'

//console.log(firstName)
console.log(sum)
const  msg = getNotes()
console.log(msg)

console.log(validator.isEmail('andrew@example.com'))
console.log(validator.isEmail('example.com'))
console.log(validator.isURL('https://mead.io'))
console.log(validator.isURL('https/mead.io'))

console.log(chalk.white.bgGreen.bold('Success!'))