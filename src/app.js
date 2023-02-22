const express = require("express");
const app = express();
const path = require ("path")

app.use(express.static("public"))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "views/login.html"))
})

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "views/register.html"))
})

const port = process.env.PORT || 3000;

app.listen(port, function (){
    console.log("Servidor escuchando en puerto " + port);
});