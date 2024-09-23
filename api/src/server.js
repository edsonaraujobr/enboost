import express from "express";
import translation from "./routes/translation.routes.js";
import word from "./routes/word.routes.js";
import user from "./routes/user.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", translation);
app.use("/", word);
app.use("/", user)

app.listen('3030', () => {
    console.log("Running on port 3030");
});