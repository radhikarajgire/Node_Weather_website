const request = require('request')

const geocode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'  + encodeURIComponent(address) +
     '.json?limit=2&access_token=pk.eyJ1IjoicmFkdmFzIiwiYSI6ImNrajBvYTQwODRwMXozMXFqc29hdm1mdnYifQ.h8Y73WeP8_xx9PpjtHh5Bw'
    request({ url,  json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to location servie', undefined)
        } else if(body.features.length === 0) {
             callback('Unable to find location. Try another search.', undefined)
        } else {
             callback(undefined, {
                 latitude: body.features[0].center[1],
                 longitude:body.features[0].center[0],
                 location: body.features[0].place_name
             })
        } 

    })
}
module.exports = geocode

//Geocoding
// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1IjoicmFkdmFzIiwiYSI6ImNrajBvYTQwODRwMXozMXFqc29hdm1mdnYifQ.h8Y73WeP8_xx9PpjtHh5Bw'

// request({url: geocodeURL, json:true}, (error, response) => {
//     const latitude = response.body.features[0].center[1]
//     const longitude= response.body.features[0].center[0]
// if (error) {
//     console.log('Unable to connect to location services!')
// } else if(response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.')
// } else {
//     console.log(latitude, longitude)
// }
    
// })