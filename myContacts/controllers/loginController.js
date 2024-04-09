const asyncHandeler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

// Get login page
// GET /
const getLogin = (req, res) => {
    res.render("home");
}

// Login user
// POST /
const loginUser = asyncHandeler(async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username}); // 사용자 이름을 이용해서 데이터베이스에서 찾아온다.
    if (!user) {
        return res.json({message : '일치하는 사용자가 없습니다.'}); // user 없을 시 출력
    }
    const isMatch = await bcrypt.compare(password, user.password); // user 있을 시 db에 저장된 pw와 입력한 pw를 비교한다.
    if (!isMatch) {
        return res.json({message : '비밀번호가 맞지 않습니다.'}); // pw 틀릴 시 출력
    }
    // 위 조건 만족 시 토큰 생성
    const token = jwt.sign({id: user._id}, jwtSecret); // (id 값, 비밀키) 넣는다.
    res.cookie("token", token, {httpOnly: true}); // (쿠키에 저장할 이름, 저장할 내용, http 프로토콜을 통해서만 접속할 수 있게 함)
     // 쿠키에 저장해야 하므로 토큰을 응답에 담아서 보낸다.
    res.redirect("/contacts"); // contact 경로로 get 요청을 보내도록 한다.
});

// Register page
// GET /register
const getRegister = (req,res) => {
    res.render("register");
}

// Register user
// POST /register
const registerUser = asyncHandeler(async(req, res) => {
    const {username, password, password2} = req.body;
    if (password === password2) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username, password:hashedPassword});
        res.json({message:"Register successful", user});
    }
    else {
        res.send("Register Failed");
    }
})

module.exports = { getLogin, loginUser, getRegister, registerUser };