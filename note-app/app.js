
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');

//customize yarg version
yargs.version('1.1.0')

//create add command
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
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body) 
    }
})

//Create a remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)

    }
})


//Creates a list command 
yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler: function () {
        console.log('Notes displayed here')
    }
})
//Create a read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('Note read here')
    }
})


//add, remove, read, list


yargs.parse()