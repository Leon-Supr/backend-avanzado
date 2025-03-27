import dotenv from "dotenv"

dotenv.config({
    path:`.env.${process.env.NODE_ENV}`
})

import express from "express" // Para creación del servidor backend
const app = express() // Indica que vamos a iniciar un servidor de forma temporal

//Configuración de rutas básica
// Health check - to check if project is alive
app.get('/', (req, res)=>{
    const healthCheck = {
        status: "Ok",
        code: "200",
        message: "Server running"
    }
    res.send(healthCheck)
})

const PORT = 5001
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})