import { Router } from "express";

const router = Router()

router.get("/product", (req, res) => {
    console.log("fetching all data .......")
    console.log("shop router")
    console.log(req.body)
    return res.status(200).json({ message: "All data fetched sucessfully" })
})

export default router