const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm // 함수 추가
} = require("../controllers/contactController");

router.route("/").get(getAllContacts);
router.route("/add").get(addContactForm).post(createContact); // createContact를 add 경로로 변경
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;