import express from "express"

const router = express.Router()

router.post("/add-product", (req, res) => {
    console.log("fetching........")
    console.log("admin router")
    console.log(req.body)
    return res.status(200).json({ message: "<h1>mehtod: POST, path: /add-product</h1>" })
})

export default router 