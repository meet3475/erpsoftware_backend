import express from "express";
const app = express();
import authRoutes from './Routes/routes.js';

import cors from "cors";

//middlewares
app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Credentials", true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json({ limit: '50mb' }));
// app.use(cors);
// app.use(express.static('photos'));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", authRoutes);

app.listen(4200, () => {
  console.log("API working!");
});