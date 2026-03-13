const express = require("express");
const router = express.Router();
const { getConnectedClient } = require("./database");

const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("todosdb").collection("todos");
    return collection;
}

//GET /todos
router.get("/todos", async(req, res) => {
    const collection = getCollection();
    const todos = await collection.find({}).toArray();

    res.status(200).json(todos);
});    

//POST /todos
router.post("/todos", (req,res) => {
      res.status(200).json({ mssg: "POST REQUEST TO /api/todos"});
});

//DELETE /todos/:id
router.delete("/todos/:id", (req,res) => {
    res.status(200).json({ mssg: "DELETE REQUEST TO /api/todos"});
});

// PUT/todos/:id
router.put("/todos/:id", (req, res) => {
     res.status(200).json({ mssg: "PUT REQUEST TO /api/todos"});
});

module.exports = router;