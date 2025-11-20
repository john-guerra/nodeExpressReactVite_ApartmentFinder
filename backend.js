import express from "express";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import listingsRouter from "./routes/Listings.js";
import authRouter from "./routes/Auth.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("./frontend/dist"));
app.use("/api", listingsRouter);
app.use("/api/auth", authRouter);

app.get("*splat", function (req, res) {
  res.sendFile("index.html", {
    root: join(__dirname, "./frontend/dist"),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
