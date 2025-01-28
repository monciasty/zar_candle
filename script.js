import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs") 
  });

  app.get('/', (req, res) => {
    // Determine your 'candleOne', 'candleTwo', and 'active' here based on your logic
    let candleOne = true; // Example value
    let candleTwo = false;
    let active = true;

    res.render('index', { candleOne, candleTwo, active });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});