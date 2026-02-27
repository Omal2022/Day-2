import { Product } from "../models/product.models.js";

const getAllProduct = async (req, res) => {
    const products = Product.findAll()
    res.status(200).json({ products })
}

export {getAllProduct}