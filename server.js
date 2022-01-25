import express from "express";
import Mongoose from "mongoose";
import Cors from "cors"; 
import Cards from "./dbCards.js";

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:5LGNG2ER97IHH3lM@clustertinderclone.e9lsu.mongodb.net/tinderDB?retryWrites=true&w=majority";
  
// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
Mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Api EndPoints
app.get('/', (req, res) => res.status(200).send("Pedro"));

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;
  console.log(` request ${res}`);
  Cards.create(dbCard, (err, data) => {
    console.log(1)
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(1)
      res.status(201).send(req.body);
    }
  });
});

app.get('/tinder/cards',  (req, res) => {
    Cards.find( (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
});
//npm i -g nodemon | Listener
//npm i cors | 
// https://developer.mozilla.org/es/docs/Web/HTTP/CORS

// Listeners
app.listen(port, () => {
  console.log(`Listening on localhost at port ${port}`);
});
