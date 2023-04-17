const express = require("express");
const router = express.Router();
//const findUser = require("./s");
router.get("/users", (req, res) =>{
    res.send("Hello Users!");
})
router.post("/users", (req, res) =>{
    console.log(req.body);
    res.send("Created the user!");
})
router.get("/users/:id", (req, res) =>{
    res.send(req.params.id);
})
module.exports = router;