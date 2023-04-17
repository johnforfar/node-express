const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}));
app.listen(3000);
app.get("/", (req, res) => {
    res.send("Hello World");
})
app.get("/users", (req, res) =>{
    res.send("Hello Users");
})