const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false}));

app.use((req, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Header', 'Origin, X-Request-With, Content-Type, Accept');
    resp.setHeader("Access-Control-Allow-Methods", "GET, POST , DELETE, OPTIONS");
    next();
});

app.post('/api/posts',(req, resp, next) => {
    const post = req.body;
    console.log(post);
    resp.status(201).json({
        message: 'success'
    });

});

app.use('/api/posts',(req, resp, next) => {
    const posts = [{
        id: '1tyfghjbnm',
        title: 'title1',
        content: 'content 1'
    },
    {
        id: '1tyfghjbnm',
        title: 'title2',
        content: 'content 2'
    }]

    resp.status(200).json({
        message: 'success',
        posts: posts
    })
});

module.exports = app;