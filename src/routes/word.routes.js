import express from 'express';
import {  getAllWordsTranslated, getAllWordsToRemember, saveNewWordEnglish } from "../controllers/word.controllers.js";

const router = express.Router();

router.get("/word/getTranslated",getAllWordsTranslated);
router.get("/word/getRemember", getAllWordsToRemember);
router.post("/word/saveRemember", saveNewWordEnglish)

export default router;