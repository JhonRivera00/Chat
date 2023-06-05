import Jwt from 'jsonwebtoken'
import UsuariosModels from '../Models/Usuarios.Models.js'
import { JWT_SECRET } from '../Config/Config.js'

export const createUser= async(req,res)=>{
    try {
        const {nombre,correo,contrasena}= req.body
        if(!nombre || !correo ||!contrasena){
            return res.status(500).json("Se requieren todos los campos")
        }else{
            const newUser = new UsuariosModels(req.body)
            newUser.contrasena = await newUser.encrypt(contrasena)
            await newUser.save()
            res.status(200).json("Usuario Creado")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
export const loginUser = async (req,res)=>{
    try {
        const {correo , contrasena}= req.body
        if(!correo || !contrasena){
            return res.status(400).json("Se requiere un nombre y usuario")
        }else{
            const verUsuario = await UsuariosModels.findOne({correo})
            if(!verUsuario){
                return res.status(400).json("Correo no existe")
            }else{
                const comparePassword = await UsuariosModels.compareContrasena(
                    contrasena , verUsuario.contrasena)

                    if(!comparePassword){
                        return res.status(400).json("Contraseña Incorrecta")
                    }else{
                        const token = Jwt.sign({id:verUsuario._id},JWT_SECRET,{
                            expiresIn:60*60
                        })

                        res.status(200).json({
                            message:"Login Correcto",
                            token:token,
                            user: verUsuario.nombre
                        })
                    }
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}