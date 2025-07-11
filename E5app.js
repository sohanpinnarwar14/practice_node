const express = require("express");

const E5app = express();


// adv routers and routers handlers

E5app.use("/user", (req, res, next) =>{
    console.log("Handling router user 1");
    // res.send("1st response");
    next();
},
(req, res, next) =>{
    console.log("Handling router user 2");
    next();
},
(req, res, next) =>{
    console.log("Handling router user 3");
    next();
},
(req, res, next) =>{
    console.log("Handling router user 4");
    next();
},
(req, res, next) =>{
    console.log("Handling routers user 5");
    res.send("5th response here we go....");
}
);


E5app.listen(3000, () =>{
    console.log("server started listening at port 3000");
});


