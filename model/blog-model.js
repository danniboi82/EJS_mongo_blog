let mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    created: {type: Date, default: Date.now}
});

let Blog = mongoose.model("Blog", blogSchema);



module.exports = Blog;


