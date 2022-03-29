const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;
const cors = require("cors");
// const { response } = require("express");
require('dotenv').config();

const api_key = process.env.API_KEY;

app.use(cors())
       
    app.get("/", (req, res) => {
        const articles = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts?apikey=${api_key}`
        };

        axios.request(articles).then((response) => {
            res.json(response.data);
        })
    });

    app.get("/article", (req, res) => {
        const currentArticle = req.query.post;
        const article = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${currentArticle}?apikey=${api_key}`
        }

        axios.request(article).then((response) => {
            res.json(response.data);
            console.log(response.data)
        })
    });

    app.get("/comments", (req, res) => {
        const currentArticle = req.query.post;
        const comment = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${currentArticle}/comments?apikey=${api_key}`
        }

        axios.request(comment).then((response) => {
            res.json(response.data);
            console.log(response.data)
        })
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
