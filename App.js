
// const chalk = require('chalk')
// const validator = require('validator')
// const name = require('./utilize')
// console.log(name)
// console.log(validator.isEmail('akashbhattq1'))
// console.log(chalk.bold.inverse.green("bhatt"))
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
        console.log("Title : " + argv.title)
        console.log("Body  : " + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function () {
        console.log("Remove the  notes")
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