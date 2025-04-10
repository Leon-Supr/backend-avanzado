import multer from "multer";
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url) //guardamos donde se guardará de forma local
const __dirname = path.dirname(__filename)

//Definir almacenamiento local
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads/'))
    },
    filename: (req, file, cb) => {
        const uniqueSufix = Date.now() + '-' + Math.round(Math.random() * 1e9) // Sufijos del cero al un chorro
        const ext = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSufix + ext)
    }
});

const uploadLocal = multer({
    storage,
    limits: {
        fieldSize: 5 * 1024 * 1024, // 5 MB como límite de subida
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf|doc|docx/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase())

        if (mimetype && extname) {
            return cb(null, true)
        }
        cb(new Error('Tipo de archivo no permitido'))
    }
});

export default uploadLocal;