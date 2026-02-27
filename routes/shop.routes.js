import { Router } from "express";
import { getAllProduct } from "../controller/shop.controller.js";

const router = Router()

router.get("/products", getAllProduct)

export default router