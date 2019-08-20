let express = require("express")
let app = express()
//app.use(express.static(__dirname+"../"))
app.get("/",function(request,response){
    //response.send("welcome to your Training")
    response.sendFile(__dirname+"/step10-module.html")
});
app.listen(5060);
console.log("Server is live on localhost:5060")