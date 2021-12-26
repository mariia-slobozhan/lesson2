const express = require("express");
const { colors } = require("./helpers");
const connectDB = require("./config/db");
const booksRourer = require("./routes/booksRouter");
require("dotenv").config({ path: "./config/.env" });

const app = express();

//body parser
app.use(express.json());

//add routes
app.use("/api/v1/books", booksRourer);

const { PORT } = process.env;

//connect to DB
connectDB();

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.cyan);
});

process.on("unhandledRejection", (err, _) => {
  if (err) {
    console.log(`Error: ${err.message}`.red);
    // server.close(() => process.exit(1));
      process.exit(1)
  }
});
