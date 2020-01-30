
const request = require('request')

const forecast = (latitude,longitude , callback)=> {
    console.log(longitude)
    console.log(latitude)

    const url2 ='https://api.darksky.net/forecast/f67d4dd1b5a46aa514527441816a3a52/' + latitude + ',' + longitude

    request({url : url2,json : true},(error,{body})=> {
        callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
         })

}

module.exports = forecast