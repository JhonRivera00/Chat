import Mensaje from '../Models/Mensajes.Models.js'
export const addMensaje = async (req,res)=>{
    try {
        const {chatId ,senderId, text}=req.body
        if(!chatId || !senderId || !text){
            return res.status(400).json("Se requiren todos los datos")
        }
        const mensajes = new Mensaje(req.body)
        const result = await mensajes.save();
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const getMensaje = async (req,res)=>{
    try {
        const {chatId}=req.params
        const  result = await Mensaje.find({chatId})
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json(error) 
    }
}