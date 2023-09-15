import express from "express";
const router = express.Router();

import {
    post,
    getAll,
    editCategory,
    deleteCategory,
    getByCatName,
    getById,
} from "../controllers/category.js";


router.get("/", getAll);
router.get("/:ID", getById);
router.get("/:CATEGORY", getByCatName);
router.put("/:CATEGORY", editCategory);
router.delete("/:CATEGORY", deleteCategory);
router.post("/add", post);

export default router;