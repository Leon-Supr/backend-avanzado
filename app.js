import express from "express" // Para creación del servidor backend

import connectDB from "./src/config/db.js"
import healthCheckRoutes from "./src/routes/healthCheckRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import authRoutes from "./src/routes/authRoutes.js"
import fileRoutes from "./src/routes/fileRoutes.js"
import {errors} from "celebrate";


connectDB()

const app = express() // Indica que vamos a iniciar un servidor de forma temporal

// Routes
app.use(express.json())
app.use("/api/v0/", healthCheckRoutes)
app.use("/api/v0/users", userRoutes)
app.use("/api/v0/auth", authRoutes)
app.use('/api/v0/files', fileRoutes)

app.use(errors())

const PORT = 5001
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

export default app; // Exportar para test