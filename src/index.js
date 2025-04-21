require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

app.use("/api", require("./routes"));

app.use("/", (req, res) => {
    res.send("<h1>Welcome to the API</h1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));