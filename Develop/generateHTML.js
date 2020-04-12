var fs = require("fs")
const genResponse = {
//generate html//




fs.writeFile("Develop/Summary.html",userInfo,function(err) {
if (err) {
    return console.log(err)
}
console.log ("Success!")

})
