import express from "express";
import translation from "./routes/translation.routes.js";
import word from "./routes/word.routes.js";

const app = express();

app.use(express.json());
app.use("/", translation);
app.use("/", word);

app.listen('3000', () => {
    console.log("Running on port 3000");
});