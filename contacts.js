const mongoose = require("mongoose")

const employeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    message : {
        type:String,
        required:true
    },
})

const Contact = new mongoose.model("Contact", employeSchema);

module.exports = Contact;