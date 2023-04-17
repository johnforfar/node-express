const express = require("express");
const router = express.Router();
const findById = require("../services/userServices.js");
router.get("/users", (req, res) =>{
    res.send("Hello Users!");
})
router.post("/users", (req, res) =>{
    console.log(req.body);
    res.send("Created the user!");
})
router.get("/users/:userid", (req, res) =>{
    res.send(findById(req.params.userid));
})
module.exports = router;