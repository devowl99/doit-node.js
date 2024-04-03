const mongoose = require("mongoose"); // 설치한 mongoose 모듈을 가져와 mongoose라는 변수로 사용
require("dotenv").config(); // 설치한 dotenv 모듈을 가져와 그 안의 config라는 함수를 실행

const dbConnect = async() => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB Connected");
    } catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;