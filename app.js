//const firstName = require('./utils')
const add = require('./utils')
const getNotes = require('./notes')
//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Attila.')
//fs.appendFileSync('notes.txt','\nIm 24 years old.')
const sum = add(4,-2)
//const name = 'Attila'

//console.log(firstName)
console.log(sum)
const  msg = getNotes()
console.log(msg)