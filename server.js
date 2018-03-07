let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost/blogPost");
  
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("semantic"));
app.use(bodyParser.urlencoded({extended: true}));


let routes = require("./control/blog-routes.js");
app.use('/', routes)


app.listen(3001, ()=> {
    console.log("you are connected to port 3001");
})

