import express from "express";
import Amadeus from "amadeus";
import bodyParser from "body-parser";
import cors from "cors";
import { CLIENT_ID, CLIENT_SECRET } from './config.js'; 

const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

const app = express();
const PORT = 5000;

app.use(bodyParser.json())



app.use(cors({
    origin: 'http://localhost:4200'
}));




//Requesting the flights list offers with city?


/* app.get('/flight-offers/:originLocationCode/:destinationLocationCode/:departureDate/:adults', (req, res) => {
 */
app.get('/flight-offers', (req, res) => {

  console.log('Dentro del get con flight-offers', req.query);
  const { originLocationCode, destinationLocationCode, departureDate, adults } = req.query;
  amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originLocationCode,
      destinationLocationCode: destinationLocationCode ,
      departureDate: departureDate,
      adults: adults
  }).then(function(response){
    console.log(response.data);
    res.send(response.result);
  }).catch(function (response) {
        res.send(response);
    });
});


// Requesting the the flight detai

 

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`)); 