import express from 'express';
import {  getAllWordsTranslated, getAllWordsToRemember, saveNewWordEnglish } from "../controllers/word.controllers.js";

const router = express.Router();

router.get("/word/getTranslated/:id",getAllWordsTranslated);
router.get("/word/getRemember/:id", getAllWordsToRemember);
router.post("/word/saveRemember/:id", saveNewWordEnglish);

export default router;