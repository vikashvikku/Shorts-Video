if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
// const router = require("e");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT || 3080;

const db = require("./db");

// DB

db.connect();

// middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("No file or directory having build");
  }
});

app.use(cors());

app.listen(port, () => {
  console.log(`listening on local host: ${port}`);
});
