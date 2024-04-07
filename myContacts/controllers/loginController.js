const asyncHandeler = require("express-async-handler");

// Get login page
// GET /
const getLogin = (req, res) => {
    res.render("home");
}

// Login user
// POST /
const loginUser = asyncHandeler(async(req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.send("Login Success");
    } else {
        res.send("Login Failed");
    }
});

module.exports = { getLogin, loginUser };