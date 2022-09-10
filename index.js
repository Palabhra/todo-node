const express = require('express');
const app = express()
const port =5050;
app.get('/',(req, res)=>{
    res.send("Hello")

})
app.listen(8000, ()=>{
    console.log("Server is running");
})
