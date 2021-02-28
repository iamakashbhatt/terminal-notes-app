const notes = require('./notes.js')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string '
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function () {
        console.log("listing out all notes")
    }
})
yargs.command({
    command: 'read',
    describe: 'read your notes',
    handler: function () {
        console.log("reading out all notes")
    }
})
yargs.parse()