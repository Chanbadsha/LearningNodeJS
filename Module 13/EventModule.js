const EventEmitter = require("node:events")

class SchoolBell extends EventEmitter{}

const schoolBell = new SchoolBell()

schoolBell.on("Ring",()=>{
    console.log('Class is end')
})
schoolBell.on("Broken",()=>{
    console.log('Oh my god , Bell is broken')
})

schoolBell.emit("Broken")


class StudentName extends EventEmitter{}

const studentName = new StudentName()

studentName.on("Call",(sName)=>{
console.log(`Hello ${sName}, Welcome to our school`)
})


studentName.emit("Call","Chan")