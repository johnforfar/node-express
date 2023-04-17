const express = require('express');
const app = express();
const userRouter = require("./routes/userController.js");
app.use(express.json());
app.listen(3000);
app.get("/", (req, res) => {
    res.send("Hello World");
})
app.use(userRouter);