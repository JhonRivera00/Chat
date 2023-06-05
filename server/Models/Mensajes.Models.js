import { Schema, model } from 'mongoose'

const mensajesSchema = new Schema(
    {
        chatId: {
            type: String
        },
        senderId: {
            type: String
        },
        text: {
            type: String
        }

    }, {
    timestamps: true
}
)
export default model("Mensajes", mensajesSchema)