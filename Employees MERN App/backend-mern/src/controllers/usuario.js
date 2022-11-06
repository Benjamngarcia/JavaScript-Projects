import { UserModel } from "../models/usuario.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const userCtrl = {}

userCtrl.register = async(req, res) =>{
    try {
        const data = req.body;
        const existUsers = await UserModel.findOne({correo: data.correo});
        if(existUsers){
            return res.status(400).json({
                ok: false,
                message: "El correo electrónico ya está en uso"
            })
        }
        //eencrypt password
        data.password = await bcrypt.hash(data.password, 10);
        const newUser = await UserModel.create(data);
        //create token
        const token = jwt.sign({_id:newUser._id}, "secreta")
        res.status(201).json({
            ok: true,
            message: "Usuario creado correctamente",
            data: { ...newUser._doc, password: null, token }
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
}

userCtrl.login = async (req, res) =>{
    try {
        const data = req.body;
        const existUser = await UserModel.findOne({correo:data.correo})
        if(!existUser){
            return res.status(400).json({
                ok:false,
                message: "El correo electrónico que ingresaste no existe"
            })
        }
        const match = await bcrypt.compare(data.password, existUser.password)
        if(match){
            //create token
            const token = jwt.sign({_id:existUser._id}, "secreta");
            return res.status(201).json({
                ok: true,
                message: "Bienvenido",
                data: { ...existUser._doc, password: null, token }
            });
        }
        return res.status(400).json({
            ok:false,
            message: "La contraseña es incorrecta"
        })
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
}