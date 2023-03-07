
exports.handleSignUp = (req, res, next) => {
    console.log("Req has reached to signUp Handler with body: ", req.body)
    res.json({
        body: "api was received!"
    })
}