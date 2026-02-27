import { Product } from "../models/product.models.js"

const addNewProduct = async (req, res ,next) => {
    const product = new Product(req.body.name, req.body.price)

    // const { name, price } = req.body

    // const product = new Product(name , price)
    try {

        await product.save()
        res.status(200).json({ message: "Product added successfully" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" })
    }


    // if (!product) 
}

export {addNewProduct}