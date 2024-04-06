const asyncHandeler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
// GET /contacts
const getAllContacts = asyncHandeler(async(req,res)=>{
    const contacts = await Contact.find();
    res.render("index", { contacts: contacts });
});

// View add Contact form
// Get /contacts/add
const addContactForm = (req, res) => {
    res.render("add");
}

// Create contact
// POST /contacts/add
const createContact = asyncHandeler(async(req,res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return res.send("필수 값이 입력되지 않았습니다.");
    }
    const contact = await Contact.create({
        name, email, phone
    });
    res.send("Create Contacts");
});

// Get contact
// GET /contacts/:id
const getContact = asyncHandeler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
});

// Update contact
// PUT /contacts/:id
const updateContact = asyncHandeler(async(req,res)=>{
    const id = req.params.id;
    const {name, email, phone} = req.body;
    const contact = await Contact.findById(id);
    if (!contact){
        throw new Error("Contact not found.");
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();

    res.json(contact);
})

// Delete contact
// DELETE /contacts/:id
const deleteContact = asyncHandeler(async(req,res)=>{
    const id = req.params.id;

    const contact = await Contact.findById(id);
    if (!contact){
        throw new Error("Contact not found.");
    }
    // 여기까진 update와 거의 동일

    await Contact.deleteOne();
    res.send("Deleted");
})

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
};
