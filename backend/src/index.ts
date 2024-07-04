import db from "./db"
import bcrypt from "bcrypt";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import user_router from "./user/router/userRouter";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
];


app.use(cors({ credentials: true, origin: allowedOrigins }));
app.use(bodyParser.json());

app.use("/user", user_router);
// Database connection
db();

app.listen(process.env.PORT || 5030, () => {
  console.log(`Server is running on port ${process.env.PORT || 5030}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

