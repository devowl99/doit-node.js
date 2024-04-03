// Get all contacts
// GET /contacts

const asyncHandeler = require("express-async-handler");

const getAllContacts = asyncHandeler(async(req,res)=>{
    res.send("Contacts Page");
});

const createContact = asyncHandeler(async(req,res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return res.send("필수 값이 입력되지 않았습니다.");
    }
    res.send("Create Contacts");
});

module.exports = {
    getAllContacts, createContact
};
