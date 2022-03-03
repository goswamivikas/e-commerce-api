const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");

const morgan = require("morgan");

const asyncWrapper = require("./middleware/async-wrapper");

const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/authRoutes");

//middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());

//
app.get("/api/v1", (req, res) => {
  res.send("e-commerce-api");
});

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
