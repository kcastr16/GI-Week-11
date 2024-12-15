const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Set up static directory to server
app.use(express.static(publicDirectoryPath))



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
    if (!req.query.address) {
        return res.send({
            error: 'YOU MUST PROVIDE AN ADDRESS'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send(error)
            }

            res.send({
                forecast: forecastData,
                location, 
                address: req.query.address
            })

        })
    })

})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kevin Guzman',
        errorMessage: 'Help Article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kevin Guzman',
        errorMessage: 'Page not found'
    })
})

app.listen(3006, () => {
    console.log('Serve is up on port 3000!')
})