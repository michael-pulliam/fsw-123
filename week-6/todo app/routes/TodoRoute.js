const express = require('express');
const todoRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let data = [
    {
        title: "goto gym",
        _id:uuidv4(),
        isComplete: false
    },
    {
        title: "do laundry",
        _id:uuidv4(),
        isComplete: false
    },
    {
        title: "food shopping",
        _id:uuidv4(),
        isComplete: false
    },
    {
        text: "do homework",
        _id:uuidv4(),
        isComplete: false
    }
]

todoRouter
    .get("/", (req, res) => {
        res.send(data)
        
    })
    .post("/", (req, res) => {
        const itemId = req.body;
        itemId._id = uuidv4();
        data.push(itemId);
        res.send(itemId);
    })
    .put("/:itemId", (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = data.findIndex(e => e._id === itemId)
        Object.assign(data[itemIndex], req.body)
        res.send(`${data[itemIndex].title} updated Successfully`)
    })
    .delete("/:itemId", (req, res) => {
        const itemId = req.params.itemId
        const itemIndex = data.findIndex(e => e._id === itemId)
        data.splice(itemIndex, 1)
        res.send("deleted Successfully")
    })

    module.exports = todoRouter