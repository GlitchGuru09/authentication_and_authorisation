const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();


const port = 3000;

app.use(cookieParser());


// app.get('/', function(req,res){
//     // res.cookie("name","shrey");

//     //encrypt password
//     // bcrypt.genSalt(10, function(err, salt) {
//     //     bcrypt.hash("Shrey@0309", salt, function(err, hash) {
//     //         console.log(hash);
//     //     });
//     // });

//     //compare or decrypt password
//     // bcrypt.compare("Shrey@0309", "$2b$10$LH7N.xLuuDNeEFHu3n7ML.bZkTG3twNmRF2LsDF6FcZRTZms4CWxW", function(err, result) {
//     //     console.log(result);
        
//     });
// })

app.get('/',function(req,res){
    const token = jwt.sign({email: "shreyvernekar09@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("Working");
})

app.get('/read', function(req,res){
    const data = jwt.verify(req.cookies.token, "secret");
    console.log(data)
    res.send("read page");
})

app.listen(port, function(err){
    console.log(`Server running on port: ${port}`);
})