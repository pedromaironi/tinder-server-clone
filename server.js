import express from "express";
import Mongoose from "mongoose";

import Cards from "./dbCards.js";

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:5LGNG2ER97IHH3lM@clustertinderclone.e9lsu.mongodb.net/tinderDB?retryWrites=true&w=majority";
// Middlewares

// DB config
Mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Api EndPoints
app.get("/", (req, res) => res.status(200).send("Pedro"));

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  console.log(` request ${req}`);
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//npm i -g nodemon | Listener

// Listeners
app.listen(port, () => {
  console.log(`Listening on localhost at port ${port}`);
});
