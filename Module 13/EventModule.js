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