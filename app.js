const express = require('express');
const app = express();
const User = require('./Models/userSchema');
const connectDB = require('./connection');

const PORT = 8080;

app.get('/', (req, res)=>{
    res.send('Hello world');
})

app.listen(PORT, (res)=>{
    console.log("Listening the service at pport :", PORT);

    connectDB().then(()=>{
        console.log("DB connected")
    })
})

app.get('/users', async(req, res)=>{
    const users = await User.find();

    res.json({
        "count": users.length,
        "members": users
    });
})

app.post('/user-create', async(req, res)=>{
    const user = new User({ username: "userTest" });

    // await user.save().then(()=>{
    //     res.status(200).json({})
    // })
    await user.save().then(() => console.log("User created"));

    res.send("User created \n");
})