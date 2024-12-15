const request = require('request')


const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.weatherstack.com/current?access_key=8f16aed134d4b67508048e1de7177a4d&query=-' + longitude + ',' + latitude + '&units=f';

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to weather server', undefined)
        } else if (response.body.error) {
            callback('unable to find location', undefined)
        } else {  
            callback( undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out. `)
        }
    })
}

module.exports = forecast
