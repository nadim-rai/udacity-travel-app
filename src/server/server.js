var path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use(express.static('dist'))

const username = process.env.USERNAME;

const {location} = require('./location');

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

app.post("/location", async (req,res) =>{
    console.log(req.body);
    const {city} = req.body;
    const Location = await location(city, username);
    console.log(Location)
})


app.listen(3000, function () {
    console.log('App listening on port 3000!')
})