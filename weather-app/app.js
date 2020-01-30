const request = require('request')
const geocode = require('./geocode')

// const url = 'https://api.darksky.net/forecast/f67d4dd1b5a46aa514527441816a3a52/37.8267,-122.4233'

// request({url : url, json : true},(error,response) => {
//     //console.log('It is currently '+response.body.currently.temperature+' out there.')

// })

// const url2 ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWVoaWFlbHNheWVkMTA1IiwiYSI6ImNrNGxnaGlvbTAxeHczbm1oOWFkdXQ1MG4ifQ.y-YPNDSYcn1TswTgPFngfQ&limit=1'

// request({url : url2,json : true},(error,response)=> {
//     const longitude = response.body.features[0].center[0]
//     console.log('Longitude = ' + longitude)
//     const latitude = response.body.features[0].center[1]
//     console.log('Latitude = '+ latitude)
// })

geocode('Boston', (error,data) =>{
    console.log(data)

})