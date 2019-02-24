const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || '3000';

// Get our API routes
const apirouter = require('./api');

//to parse the data of post reqest to json
app.use(bodyParser.json());
app.use(cors());

// to stop the url encoding in the request
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api",apirouter);
app.get("*",(req,res)=>{
res.sendfile(path.join(__dirname), 'dist/index.html');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
