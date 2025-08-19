const fs = require("fs")
const path = require("path")



const inputArguments = process.argv.slice(2)

const logText = inputArguments.join(" ")

if (! logText) {
    return console.log(" ❌ No log data found, Please use Node index.js Hello world")
    
}

const timeStamp = new Date().toLocaleTimeString()
console.log(timeStamp)

const message = `${logText} \n ${timeStamp} \n`
const filePath = path.join(__dirname,'text.txt')

console.log(filePath)



fs.appendFile(filePath,message,(err)=>{

    if (err) {
        console.log(err)
        return
    }else{
        console.log("Log written succesfull")
    }
})
