const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// your code goes here
app.get("/",(req, res) => {
    res.send("Hello world!");
});

// addition operation
app.post("/add",(req, res) => {
    const num = 1000000;
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let sum = num1 + num2;
    if(typeof num1 === "string" || typeof num2 === "string"){
        res.json({
            status:"error",
            message: "Invalid data types"
        });
    }else if(num1 >= num || num2 >= num || sum >= num){
        res.json({
            status: "failure",
            message: "Overflow"
        });
    }else{
        res.json({
            status: "success",
            message: "the sum of given two number",
            sum: sum
        });
    }
});

// Subtraction Operation
app.post("/sub",(req, res) => {
    const num = -1000000;
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(typeof num1 === "string" || typeof num2 === "string"){
        res.json({
            status:"error",
            message: "Invalid data types"
        });
    }else if(num1 <= num || num2 <= num ){
        res.json({
            status: "failure",
            message: "Overflow"
        });
    }else{
        let sub = num1 - num2;
        res.json({
            status: "success",
            message: "the difference of given two numbers",
            difference: sub
        });
    }
});

// Multiplication Operation
app.post("/multiply",(req, res) => {
    const num = 1000000;
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let mul = num1 * num2;
    if(typeof num1 === "string" || typeof num2 === "string"){
        res.json({
            status:"error",
            message: "Invalid data types"
        });
    }else if(num1 >= num || num2 >= num || mul >= num){
        res.json({
            status: "failure",
            message: "Overflow"
        });
    }else{
        res.json({
            status: "success",
            message: "The product of given numbers",
            result: mul
        });
    }
});

// Division Operation
app.post("/divide", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if (num2 === 0) {
      res.json({ 
          message: "Cannot divide by zero" 
        });
    }
    let div = num1 / num2;
    res.json({
        status:"success",
        message: "The division of given numbers",
        result: div
    });
  });
 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;