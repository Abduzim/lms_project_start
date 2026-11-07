import express from "express"
import roleRouter from "../controllers/roles.js"
import RoleController from "../controllers/roles.js"

const router = express.Router()
router.post("/roles",roleController.createRole)
export default router