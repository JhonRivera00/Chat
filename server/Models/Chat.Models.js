import { Schema, model } from 'mongoose'

const chatSchema = new Schema(
    {
        usuarios : {
            type:Array,
        },

    },
    {
        versionKey: false,
        timestamps: true
    }
)
export default model ("Chat", chatSchema)