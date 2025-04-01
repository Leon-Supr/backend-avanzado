import dotenv from "dotenv"
import express from "express" // Para creación del servidor backend

import connectDB from "./src/config/db.js"
import healthCheckRoutes from "./src/routes/healthCheckRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"

dotenv.config()
connectDB()

const app = express() // Indica que vamos a iniciar un servidor de forma temporal

// Routes
app.use(express.json())
app.use("/api/v0/", healthCheckRoutes)
app.use("/api/v0/users", userRoutes)

const PORT = 5001
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})