
const request = require('request')
const geocode = (address,callback)=> {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWVoaWFlbHNheWVkMTA1IiwiYSI6ImNrNGxnaGlvbTAxeHczbm1oOWFkdXQ1MG4ifQ.y-YPNDSYcn1TswTgPFngfQ&limit=1'
    request({url : url,json : true},(error,response)=>{
        
        callback(undefined,{
            longitude : response.body.features[0].center[0],
            latitude1 : response.body.features[0].center[1],
            location : response.body.features[0].place_name
        })
        
    })
}

// geocode('New York', (error,data) =>{
//     console.log(data)

// })

module.exports = geocode