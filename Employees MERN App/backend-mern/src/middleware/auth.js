import { UserModel } from "../models/usuario.js";
import jwt from 'jsonwebtoken'

export const verificarToken = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({
            ok: false,
            message: "You're not authorized to access this resource 1",
        });
    }
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({
            ok: false,
            message: "You're not authorized to access this resource 2",
        });
    }
    jwt.verify(token, "secreta", async(error, payload) =>{
        if(error){
            return res.status(401).json({
                ok: false,
                message: "You're not authorized to access this resource 3",
            });
        }
        const { _id } = payload;
        const resp = await UserModel.findById(_id);
        if(!resp){
            return res.status(401).json({
                ok: false,
                message: "You're not authorized to access this resource 4",
            });
        }
        req.userid = _id;
        next();
    })
};
