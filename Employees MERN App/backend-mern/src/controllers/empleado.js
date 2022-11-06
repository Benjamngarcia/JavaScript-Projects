import { EmpleadoModel } from "../models/empleado.js";
export const empleadoCtrl = {}

//don't use from frontend except admin user
empleadoCtrl.listAllEmployees = async(req, res) =>{
    try {
        const resp = await EmpleadoModel.find().populate({path: 'usuario', select: '-password'});
        res.status(200).json({
            ok: true,
            message: "Lista de empleados",
            data: { resp }
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
};

empleadoCtrl.createEmployee = async (req, res) =>{
    try {
        const data = req.body
        const resp = await EmpleadoModel.create({...data, usuario:req.userid})
        res.status(201).json({
            ok: true,
            message: "Empleado creado",
            data: { resp }
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
};

empleadoCtrl.listById =  async(req, res) =>{
    try {
        const { id } = req.params;
        const resp = await EmpleadoModel.findById(id);
        if(!resp){
            return res.status(404).json({ok:false, message: "Empleado no encontrado"});
        }
        res.status(200).json({
            ok: true,
            message: "",
            data: { resp }
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
};

empleadoCtrl.listEmployeeBoss = async(req, res) =>{
    try {
        const resp = await EmpleadoModel.find({usuario: req.userid}).populate({path: 'usuario', select: '-password'});
        res.status(200).json({
            ok: true,
            message: "",
            data: { resp }
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
};

empleadoCtrl.deleteEmployee =  async(req, res) =>{
    try {
        const { id } = req.params;
        const resp = await EmpleadoModel.findById(id);
        if(!resp){
            return res.status(404).json({ok:false, message: "Empleado no encontrado"});
        }
        await resp.deleteOne();
        res.status(200).json({
            ok: true,
            message: "Empleado eliminado"
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
};

empleadoCtrl.updateEmployee =  async(req, res) =>{
    try {
        const { id } = req.params;
        const resp = await EmpleadoModel.findById(id);
        if(!resp){
            return res.status(404).json({ok:false, message: "Empleado no encontrado"});
        }
        await resp.updateOne(req.body);
        res.status(200).json({
            ok: true,
            message: "Empleado actualizado"
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
};

empleadoCtrl.searchEmployee = async (req, res) => {
    try {
        const { nombre } = req.params;
        const resp = await EmpleadoModel.find({
            nombre: { $regex:".*"+nombre+".*" },
            usuario: req.userid
        })
        res.status(200).json({
            ok: true,
            message: "Empleado encontrado",
            data: resp
        });
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
}