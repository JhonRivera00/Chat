import ChatModels from '../Models/Chat.Models.js';

export const createChat = async (req,res )=>{
    const {senderId,reciverId}=req.body
    if(!senderId || !reciverId){
        return res.status(400).json("Se requiere los usuarios")
    }
    const newChat = new ChatModels({
        usuarios:[req.body.senderId, req.body.reciverId]
    })
    try {

        const result = await  newChat.save();
        res.status(200).json(result)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const userChats = async (req,res)=>{
    try {
        const chat = await ChatModels.find({
            usuarios:{$in:[req.params.userId]}
        })
        res.status(200).json(chat)
    } catch (error) {
               console.log(error)
        res.status(500).json(error)
    }
}
export const findChat = async (req,res)=>{
    try {
        const chat = await ChatModels.findOne({
            usuarios:{$all:[req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}