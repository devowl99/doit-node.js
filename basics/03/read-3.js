// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)

const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data)=>{
    if (err){
        console.log(err);
    }
    console.log(data)
    fs.writeFile("./test.txt", data, (err) =>{
        if(err){
            console.log(err);
        }
        console.log('test.txt is saved');
    })
});