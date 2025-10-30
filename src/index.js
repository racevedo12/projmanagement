import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening app on port http://localhost:${port}`);
});
