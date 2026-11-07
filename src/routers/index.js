import roleRouter from "./roles.js"
import express from "express"

const appRouter = express.Router()

appRouter.use("/api/v1",roleRouter)

export default appRouter