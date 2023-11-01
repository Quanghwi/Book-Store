import express from "express";
import { createCate, getAllCate, getDetailCate, removeCate, updateCate } from "../controllers/category.controller.js";


const routerCategory = express.Router();

routerCategory.get("/categories", getAllCate);
routerCategory.get("/categories/:id", getDetailCate);
routerCategory.post("/categories", createCate);
routerCategory.patch("/categories/:id", updateCate);
routerCategory.delete("/categories/:id", removeCate);

export default routerCategory;