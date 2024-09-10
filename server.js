const express = require ("express")
require ("./config/databaseConfig.js")
const ProductRouter = require ("./router/productRouter.js")
const router = require("./router/userRouter.js")
const FarmerRouter = require ("./router/farmerRouter.js")
const app = express()
app.use(express.json())


app.use('/uploads', express.static('uploads'))
app.use("/api/v1",router)
app.use("/api/v1",FarmerRouter)
app.use("/api/v1",ProductRouter)





app.get("/", (req,res)=>{
    res.status(200).json({
        message:"WELCOME TO NECTAR-BUZZ"
    })
})

const port = process.env.port || 3002

app.listen(port,()=>{
    console.log("server is running on port", port);
    
})
