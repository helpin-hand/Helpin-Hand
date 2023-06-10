const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require('./db/conn');
const Register = require("./models/registers");
const Contact = require("./models/contacts");
const {json} = require("express");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/Contact", (req, res) => {
    res.render("Contact");
});

app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/login", (req, res) => {
    res.render("login")
})

// app.post("/register", async (req, res) => {
//     try {
        
//         const password = req.body.password;
//         const confirmpassword = req.body.confirmpassword;

//         if (password === confirmpassword) {
            
//             const registerEmployee = new Register({

//                 emaill : req.body.emaill,
//                 Contact : req.body.Contact,
//                 Address : req.body.Address,
//                 password : req.body.password,
//                 confirmpassword : req.body.confirmpassword
//             })

//             const registered = await registerEmployee.save();
//             res.status(201).render("index");

//         }
//         else{
//             res.send("Passwords are not matching")
//         }

//     } catch (error) {
//         res.status(400).send(error);
//     }
// })



// app.post("/login", async(req, res) => {
//     try {
        
//         const emaill = req.body.emaill;
//         // const Contact = req.body.Contact;
//         const password = req.body.password;

//         // console.log(`${emaill} and password is ${password} and ${Contact} is contact`) 

//         const useremail = await Register.findOne({emaill:emaill});
//         // res.send(useremail.password);
//         // console.log(useremail);

//         if (useremail.password === password) {
//             res.status(201).render("index");
//         }else{
//             res.send("invalid login details");
//         }
//     } catch (error) {
//         res.status(400).send("invalid login details")
//     }
// });


app.post("/Contact", async(req, res) => {
    try {
        const contactempolye = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })

        const submitted = await contactempolye.save();
        res.status(201).render("index");
        
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`server is running at port number ${port}`)
});