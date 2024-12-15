const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')


// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))


//set up static directory to server
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Kevin Guzman'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Kevin Guzman'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Helpful Information',
        text: 'Here is some helpful information'
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather here')
})



app.listen(3000, () => {
    console.log('Serve is up on port 3000!')
})