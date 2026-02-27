import express from "express"
import { addNewProduct } from "../controller/admin.controller.js"

const router = express.Router()

router.post("/add-product", addNewProduct)

export default router
