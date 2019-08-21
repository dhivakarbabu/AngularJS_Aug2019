let express = require("express");
let app = express();

app.use(express.static(__dirname));
app.get("/", function(request, response){
    //response.send("Welcome to your Machine");
    response.sendFile(__dirname+"/step12-classes-interface.html");
});
app.listen(5050);
console.log("Server is now live on localhost:5050");