const fs = require('fs')

// Synchronous File write
const text = 'Hello, my name is Chan Badsha' 

fs.writeFileSync('./test.txt',text)



// Synchronous File Append

const newText = 'Node.js is awesome!'

fs.appendFileSync('./test.txt', `\n ${newText}`)


// Synchronous check is file exist

if (! fs.existsSync('./test.txt')) {
    console.log("File not exist")
}

// Synchronous File Read 
const data = fs.readFileSync('./test.txt',{encoding: "utf-8"})

console.log(data)