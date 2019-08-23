//const firstName = require('./utils')
//onst validator = require('validator')
//const add = require('./utils')
const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Attila.')
//fs.appendFileSync('notes.txt','\nIm 24 years old.')
//const sum = add(4,-2)
//const name = 'Attila'

//console.log(firstName)
//console.log(sum)
//const  msg = getNotes()
//console.log(msg)

//console.log(validator.isEmail('andrew@example.com'))
// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('https://mead.io'))
// console.log(validator.isURL('https/mead.io'))

// console.log(chalk.white.bgGreen.bold('Success!'))

// console.log(process.argv[2])

// const command = process.argv[2]

// console.log(process.argv)

// if(command === 'add') {
//     console.log('Adding note')
// } else if(command === 'remove') {
//     console.log('Removing note')
// }


// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list
// create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
           describe: 'Not body',
           demandOption: true,
           type: 'string' 
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title to delete note',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv) { 
            notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing out all  notes',
    handler: function () {
        console.log('Listing notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()

// console.log(yargs.argv)