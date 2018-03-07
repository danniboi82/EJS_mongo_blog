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
app.get('/blogs/:id/edit', (req, res)=>{
    Blog.findById(req.params.id, (error, foundBlog)=>{
        if(error){
            console.log("ERROR", error);
        } else {
            console.log("ConsoleLOG from EDIT ROUTE", foundBlog.content)
            //render page with previous content but editable
            res.render("editBlog", {blog: foundBlog})
        }
    })
})

//UPDATE ROUTE
app.put('/blogs/:id', (req, res)=>{
    let id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;
    let image = req.body.image;
    Blog.findByIdAndUpdate(id, {title: title, content: content, image: image}, (error, updatedBlog)=>{
        if(error){
            console.log("google it");
            res.redirect('/blogs');
        } else {
            // res.redirect("/blogs/:id", {blog: updatedBlog})
            res.redirect(`/blogs/${id}`)
        }
    })
})

//DELETE ROUTE
app.delete('/blogs/:id', (req, res)=>{
    let id = req.params.id;
    Blog.findByIdAndRemove(id, (error, blogDelete)=>{
        if(error){
            console.log(error, "TRY AGAIN AND AGAIN");
        } else {
            res.redirect('/blogs');
        }
    })
})

module.exports = app;