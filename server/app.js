import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import chat from './Routes/Chat.Routes.js'
import usuarios from './Routes/Usuarios.Routes.js'
import mensajes from './Routes/Message.Routes.js'

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/chat",chat)
app.use("/usuario",usuarios)
app.use("/mensajes",mensajes)
export default app;
