const express = require("express");
const app = express();

// this will match only GET call to /user
app.get("/user", (req, res) => {
    res.send({ firstname: "sohan", lastname: "Pinnarwar" });
});

// this will match only POST call to /user
app.post("/user", (req, res) => {
    res.send("Data successfully saved to the database");
});

// this will match only DELETE call to /user
app.delete("/user", (req, res) => {
    res.send("User profile deleted successfully");
});

// this will match all the HTTP method API calls to /home
app.use("/home", (req, res) => {
    res.send("Welcome to home page");
});



// dynamic route using route parameters
app.get("/test/:id", (req, res) =>{
    const userid = req.params.id;
    console.log(`user id is :  ${userid}`);
});

// OPTIONAL — general /user route moved to the end
app.use("/user", (req, res) => {
    res.send("testing......");
});

app.listen(3000, () => {
    console.log("server started listening at port 3000");
});
