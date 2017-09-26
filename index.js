const express = require('express');
const app = express(); 
const port = 3000;

app.get('/', function(reg,res) {
    res.send('Hello World');
}); 

// TO DO GET APPLES

app.listen(3000, function() {
    console.log(`y server is running on port ${port}`);
});

// app.post