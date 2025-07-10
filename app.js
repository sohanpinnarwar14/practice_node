const  express = require("express")

const app = express();

app.use("/home",(req, res) => {
    res.send("Welcome to home page");
});

app.use("/profile",(req,res) =>{
    res.send("Hello sohan ");
});


app.use("/orders",(req, res) =>{
    res.send("Welcome to my orders");
});


app.listen(3000, () => {
    console.log("server started listing at port 3000");
});
