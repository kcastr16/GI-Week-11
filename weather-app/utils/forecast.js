const request = require('request')


const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.weatherstack.com/current?access_key=8f16aed134d4b67508048e1de7177a4d&query=-' + latitude + ',' + longitude + '&units=f';

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            console.log('Unable to connect to weather server', undefined)
        } else if (response.body.error) {
            console.log('unable to find location', undefined)
        } else {  
            console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out. `)
        }
    })
}

module.exports = forecast
