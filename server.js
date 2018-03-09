let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let expressSanitizer = require('express-sanitizer');
let methodOverride = require('method-override');
mongoose.connect("mongodb://localhost/blogPost");
  
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());


let routes = require("./control/blog-routes.js");
app.use('/', routes)


app.listen(3001, ()=> {
    console.log("you are connected to port 3001");
})

