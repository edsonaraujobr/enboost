import express from "express";
import { translateWordEnglishToPortuguese, translateWordPortugueseToEnglish } from "../controllers/translation.controllers.js";

const router = express.Router();

router.post("/translation/EN-PT", translateWordEnglishToPortuguese);
router.post("/translation/PT-EN", translateWordPortugueseToEnglish);


export default router;