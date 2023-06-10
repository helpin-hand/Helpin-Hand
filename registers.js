const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true
    },
    Contact : {
        type:Number,
        required:true,
        unique:true
    },
    Address : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;