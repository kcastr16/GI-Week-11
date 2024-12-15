const request = require('request');

const url = 'https://api.weatherstack.com/current?access_key=8f16aed134d4b67508048e1de7177a4d&query=35.227085,%20-80.843124&units=f';


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect')
//     } else if (response.body) {
//         console.log('unable to find location')
//     } else {  
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out. `)
//     }
// })

// Geocoding
// Address -> Lat/Long --> Weather




const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Nhc3RyMTYiLCJhIjoiY200bXh1OWVyMDJhaTJucHh5bXFqZG11eCJ9.tM_2xuxIZFfq8cGDQ2EhJA&limit=1';

request({ url: mapboxUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect right now.');
    } else if (!response.body.features || response.body.features.length === 0) {
        console.log('Unable to find the location.');
    } else {
        const longitude = response.body.features[0].center[0];
        const latitude = response.body.features[0].center[1];
        console.log('Latitude:', latitude, 'Longitude:', longitude);
    }
});







