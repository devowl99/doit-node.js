// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");

const server = http.createServer((req, res)=>{
    
    const {url, method} = req;

    res.setHeader("Content-type", "text/plain");

    if (method==="GET" && url ==="/home"){
        res.write("HOME");
        res.end();
    }
    else if (method==="GET" && url==="/about"){
        res.end("ABOUT");
    }
    else{
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
});