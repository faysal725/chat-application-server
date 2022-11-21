
// get inbox page 

function getInbox(req, res, next) {
    res.render("inbox", {
        title: "inbox - App"
    })
}
module.exports= {
    getInbox,
}