import express from "express"
import { addNewProduct, deleteOne } from "../controller/admin.controller.js"

const router = express.Router()

router.post("/add-product", addNewProduct)
router.delete("/delete-product/:id", deleteOne)

export default router
