import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userModel from "./models/userModel.js";

const app = express();
const mongoDbURl = "Add your connection string into your application code";

app.use(express.json());

// CORS Policy
app.use(cors({
    origin: 'http://localhost:3000', //yours frontend host
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

// mongoose connection
mongoose.connect(mongoDbURl)
    .then(() => {
        console.log("mongoose is connection");
    }).catch((err) => {
        console.log(err);
    });

// post register
app.post("/register", (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    userModel.create(data)
        .then((user) => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })
});

// post login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password })
    userModel.findOne({ email: email })
        .then(result => {
            if (result) {
                if (result.password === password) {
                    res.json("success");
                } else {
                    res.json("password is false");
                }
            } else {
                res.json("not save your email");
            }
        })
});

app.listen(3001, () => {
    console.log("server listening in 3001");
});