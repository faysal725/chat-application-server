
// get users page 

function getUsers(req, res, next) {


    // console.log("runn")
    res.render("users", {
        title: "users - App"
    })
}
module.exports= {
    getUsers
}