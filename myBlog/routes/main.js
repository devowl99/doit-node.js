const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler"); // 비동기 처리 위해 asyncHandler 가져옴

router.get(
    ["/", "/home"],
    asyncHandler(async (req,res) => {
        const locals = {
            title: "Home"
        }
        const data = await Post.find(); // db의 모든 게시물 가져옴
        res.render("index", {locals, data, layout: mainLayout}) // 가져온 값을 index.ejs로 넘겨줌
    })
)

router.get("/about", (req,res) => {
    const locals = {
        title: "About"
    }
    res.render("about", {locals, layout: mainLayout})
})

// 게시물 상세 보기
// GET /post/:id
router.get(
    "/post/:id",
    asyncHandler(async(req,res)=>{
        const data = await Post.findOne({_id: req.params.id});
        res.render("post", {data, layout: mainLayout});
    })
)

module.exports = router;