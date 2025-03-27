import express from "express"

const router = express.Router()


const healthCheck = (req, res) => {
    res.status(200).json({
        status: "Ok",
        code: "200",
        message: "Server running"
    })
}

router.get("/healthcheck", healthCheck)

export default router