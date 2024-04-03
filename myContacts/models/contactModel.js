const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
// contactSchema : 스키마의 이름, mongoose.Schema : 몽구스에서 사용하는 함수
    name: { // 중괄호 안에는 요소의 자료 유형, 필수 자료인지 아닌지를 지정 가능
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, "전화번호는 꼭 기입해 주세요"]
        // 사용자가 필수 속성을 입력하지 않았을 때 표시할 에러 메세지
    }
},
{
    timestamps: true
    // 자료가 작성, 수정되면 자동으로 그 시간을 기록해주는 속성. true로 하면 mongodb에서 알아서 해준다.
}
);

// mongoose.model(모델명, 스키마명)
// (스키마 -> 모델) 변환 함수
const Contact = mongoose.model("Contact", contactSchema); // 이렇게 변환하는 함수를 Contact 변수로 사용할 것

module.exports = Contact;