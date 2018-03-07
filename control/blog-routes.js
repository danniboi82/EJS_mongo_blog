let mongoose = require('mongoose');
let Blog = require('../model/blog-model');
let express = require('express');
let app = express();

//INDEX ROUTE
app.get('/blogs', (req, res) => {
    Blog.find({}, (error, entry) => {
        res.render('home', {blogs: entry});
        console.log(blogs.content.substring(0, 20))
    })
})

//NEW ROUTE
app.get('/blogs/new', (req, res) =>{
    res.render('addBlog')
})

//CREATE ROUTE
app.post('/blogs', (req, res)=>{
    //create blog
    let title = req.body.title;
    let content = req.body.content;
    let image = req.body.image;
    Blog.create({title : title, content: content, image: image}, (error, newBlog)=>{
        if(error){
            console.log(error, "TRY HARDER");
        } else {
            res.redirect('/blogs')
        }
    })
})

//SHOW ROUTE
app.get('/blogs/:id', (req, res)=>{
    Blog.findById(req.params.id, (error, foundBlog)=>{
        if(error){
            res.redirect('/blogs');
        } else {
            res.render('details', {blog : foundBlog})
        }
    })
})
//EDIT ROUTE

//UPDATE ROUTE

//DELETE ROUTE

module.exports = app;