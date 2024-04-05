const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

dbConnect();

app.get("/", (req,res)=>{
    res.send("Hello Node");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, () => {
    console.log('서버 실행 중');
});

// // 모든 연락처 가져오기
// app.get("/contacts", (req,res)=>{
//     res.send("Contacts Page");
// });

// // 새 연락처 추가
// app.post("/contacts",(req,res)=>{
//     res.send("Create Contacts");
// });

// // 연락처 1개 가져오기
// app.get("/contacts/:id",(req,res)=>{
//     res.send(`View Contact for ID : ${req.params.id}`);
// });

// // 연락처 수정하기
// app.put("/contacts/:id",(req,res)=>{
//     res.send(`Update Contact for ID : ${req.params.id}`);
// });

// // 연락처 삭제하기
// app.delete("/contacts/:id",(req,res)=>{
//     res.send(`Delete Contact for ID : ${req.params.id}`);
// });
