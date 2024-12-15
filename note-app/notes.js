const fs = require('fs');
const chalk = require('chalk')


function getNotes() {
    console.log('Your Notes...');
}


// Adds a note
const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) { //Stores duplicate notes if the title is same as one title already in the array
        return note.title === title;
    })

    if (duplicateNotes.length === 0) { //If there is 0 duplicates in the duplicateNotes, it adds it in to the notes json file
        notes.push({
            title: title,
            body: body
        })
       
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!')) //Does not add a note if the title is already taken, logs an error message in to the console
    }

 
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep);

    } else {
        console.log(chalk.red.inverse('No note found'))
    }

    

    
}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes) // converts the JSON in the readable string data
    fs.writeFileSync('notes.json', dataJSON) // Saves the dataJSON information once converted in to the notes.json file

}


const loadNotes = function () {
    try {

        const dataBuffer = fs.readFileSync('notes.json') //reads the notes.json file
        const dataJSON = dataBuffer.toString() //converts the information in to a string
        return JSON.parse(dataJSON) //returns the parsed dataJSON information

    } catch (e) {
        return []
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}

