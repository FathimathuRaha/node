const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = new express();
app.use(cors());

app.use(bodyParser.json());
let Student = require("./student.model");
mongoose.connect("mongodb+srv://fathimathuraha:bjIC1RucYx1jmRPK@cluster0.ifosmcj.mongodb.net/studentbase?retryWrites=true&w=majority&appName=Cluster0");

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongoose connection established");
})

app.get('/', (req, res) => {
    console.log("request");
    res.json("hello world");
});
app.get('/hi', (req, res) => {
    console.log(" hi request recieved");
    res.json("welcome to the world");
});
app.get('/people', (req, res) => {
    console.log("people request recieved");
    res.json([{ name: "raha", dept: "IT" },
    { name: "Nandana", dept: "IT" }

    ]);
});
app.get('/students', async (req, res) => {
    console.log("student request recieved");
    let data = await Student.find().catch((err => {
        res.json("error loading data");
    }));
    res.json(data);
    // res.json([{name:"Raha",dept:"IT",age:21},
    // {name:"Nandana",dept:"IT",age:21},
    // {name:"Sarima",dept:"IT",age:20}

    // ]);
});

app.get('/students/:id', async (req, res) => {
    let id = req.params.id;
    let data = await Student.findById(id).catch(err => {
        res.json("error finding person");

    });
    if (!data) {
        res.json("not found");
    }
    else {
        res.json(data);
    }
})
app.delete('/students/:id', async (req, res) => {
    let id = req.params.id;
    await Student.findByIdAndDelete(id).then(() => {
        res.json("data removd successfully");
    }).
        catch(err => {
            res.json("failed deleting data");
        });
})

app.post('/students', (req, res) => {
    console.log(req.body);
    let student = new Student(req.body);
    student.save().then(() => {
        res.json("saved successfully");
    }).catch(err => {
        res.json("error:" + err);
    })
}
);


app.listen("4001", () => {
    console.log("started server on 4000");
});