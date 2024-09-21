import express from "express";
import { translateWordEnglishToPortuguese, translateWordPortugueseToEnglish } from "../controllers/translation.controllers.js";

const router = express.Router();

router.post("/translation/EN-PT/:id", translateWordEnglishToPortuguese);
router.post("/translation/PT-EN/:id", translateWordPortugueseToEnglish);

export default router;