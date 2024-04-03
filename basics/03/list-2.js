// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)

const fs = require("fs");
// 파일이 있는 현재 폴더(./)에서 파일들을 가지고 오려고 한다.
fs.readdir("./", (err, files) => { //에러가 나면 에러메세지, 아니면 files를 보여달라
    if (err){
        console.log(err);
    }
    console.log(files);
});