import mongoose from 'mongoose';
const { Schema, model } = mongoose

const employeeSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    ide: {
        type: String,
        required: true
    },
    tcontrato: {
        type: String,
        required: true
    },
    usuario: { type: Schema.ObjectId, ref: 'usuario'},
}, {
    timestamps: true
}
);

export const EmpleadoModel = model('empleado', employeeSchema)