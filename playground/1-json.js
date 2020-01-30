const fs = require('fs')

// const book = {

//     title : 'Body beast',
//     author :'Yehia el sayed'
    


// }

// const JSONBook = JSON.stringify (book)
// fs.writeFileSync('1-json.JSON',JSONBook)

const Databuffer = fs.readFileSync('1-json.JSON')
const Data = Databuffer.toString()
const Actual = JSON.parse(Data)
// console.log(Actual.planet)

Actual.name = 'Yehia'
Actual.age = '22'

const JSONAct = JSON.stringify(Actual)
fs.writeFileSync('1-json.JSON',JSONAct)