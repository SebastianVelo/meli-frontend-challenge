const express = require('express');
const cors = require('cors')
const request = require('./request/request');
const app = express();
const port = 5000;

app.use(cors());

app.get("/api/category/:id", async (req, res) => {
    let category = await request.getCategoryById(req.params.id, "GET");
    res.json(category);
})

app.get("/api/items/:id", async (req, res) => {
    let product = await request.getItemById(req.params.id, "GET");
    res.json(product);
})

app.get("/api/items/:id/description", async (req, res) => {
    let product = await request.getItemDescription(req.params.id, "GET");
    res.json(product);
})

app.get("/api/items?:query", async (req, res) => {
    let products = await request.getSearch(req.query.query, "GET");
    res.json(products);
})

app.listen(port, () => console.log("Server started on port " + port));
