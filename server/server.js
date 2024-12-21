const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
};

connectDb();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/carEntries", require("./Routes/serverRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
