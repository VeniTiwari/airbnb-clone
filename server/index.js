const express = require('express');
const app = express();
const cors = require('cors');
const connection = require("./db")

// //database
connection();


// //middleware
app.use(express.json());
app.use(cors());

app.listen(8080,()=> console.log(`Listening on port 8080`));


