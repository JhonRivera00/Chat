import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'
const usuarioSchema = new Schema (
    {
        nombre:{
            type:String
        },
        correo:{
            type:String
        },
        contrasena:{
            type:String
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)
usuarioSchema.methods.encrypt=(contrasena)=>{
    return bcrypt.hash(contrasena,10)
}
usuarioSchema.statics.compareContrasena= async (password,contrasena)=>{
    return await bcrypt.compare(password,contrasena)
}

export default model ("Usuarios", usuarioSchema)