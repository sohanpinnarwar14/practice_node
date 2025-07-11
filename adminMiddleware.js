// dummy admin 

function checkAdmin(req, res, next){
    const isAdmin = req.query.admin === "true";

    if(isAdmin) {
        console.log("Admin accese granded");
        next();
    }else{
        console.log("Admin access denied");
        res.send(403).send("Forbidden: Admin only");
    }
}


module.exports = checkAdmin;