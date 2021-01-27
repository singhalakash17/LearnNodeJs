const fs = require('fs')

fs.readSy('package.json', 'utf8' , (err, data) => {
    console.log(data)
})

console.log("File reading in async mode")
