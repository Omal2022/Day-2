import express from "express"
import adminRouter from './routes/admin.routes.js';
import shopRouter from "./routes/shop.routes.js";


const app = express()
app.use(express.json())

app.use("/admin", adminRouter)
app.use("/shop", shopRouter)


export default app