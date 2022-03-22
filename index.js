const express = require("express");
const app = express();
const morgan = require("morgan")

app.use(morgan("dev"))

const PORT = process.env.PORT || 1234;

const api = require('./routes/app.js'); 
app.use(express.json());
app.use('/charactergen', api);

app.use(express.static('public'));

const secret = require("./routes/secret.js")
app.use(express.json());
app.use('/secret', secret);

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})