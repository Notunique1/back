const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getQuote, getAffirmation, getPositive, getLove} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/quote", getQuote);

app.get("/api/affirmation", getAffirmation);

app.get("/api/positive", getPositive);

app.get("/api/love", getLove);

app.listen(4000, () => console.log("Server running on 4000"));
