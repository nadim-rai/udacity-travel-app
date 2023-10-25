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
const weather_key = process.env.WEATHER_KEY;
const pixabay_key = process.env.PIX_KEY;

const { location } = require('./location');
const { weather } = require('./weather');
const { picture } = require('./picture');

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

app.post("/location", async (req,res) =>{
    const {city} = req.body;
    const Location = await location(city, username);
    res.send(Location);
})

app.post("/weather",  async (req,res) => {
    const {lng, lat, days} = req.body
    const Weather = await weather(lat, lng, days, weather_key);
    res.send(Weather);
 })
 
 app.post("/picture", async (req,res) => {
    const {city_name} = req.body
    const Picture = await picture(city_name, pixabay_key)
    res.send(Picture)
  })


app.listen(3000, function () {
    console.log('App listening on port 3000!')
})