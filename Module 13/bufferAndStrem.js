const fs = require('fs')

// Show Buffer Data

// const buffer = fs.readFile('./test.txt',(err,data)=>{
//     if (err) {
//         console.log(err)
//     }else{

//         console.log(data.toString())
//     }
// })



const readFileStream = fs.createReadStream('./test.txt',{encoding: "utf-8"})
const writeFileStream = fs.createWriteStream('./write.txt',{encoding: "utf-8"})



// readFileStream.on('data',((data)=>{
//     console.log(data)
// }))
// Error Check
readFileStream.on('error',(err)=>{
    console.log("Error from readFileStream", err)
})

let writeData = "This data written by using writeStream"
writeFileStream.write(writeData)

writeFileStream.end("Finished writing")

writeFileStream.on("finish",()=>{
     console.log("All data written successfully.");
})

writeFileStream.on("error", (err) => {
    console.error("Error writing file:", err);
});