import app from './app.js'
import {PORT} from './Config/Config.js'
import "./Db/Db.js"
app.listen(PORT,()=>{
    console.log("Escuchando en el puerto " + PORT)
})