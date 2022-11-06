import mongoose from 'mongoose'

const URI = 'mongodb://localhost/pruebaudemy'

export const connectDB = async() => {
    try {
        const db = await mongoose.connect(URI);
        console.log(`Conectado a la base de datos ${db.connection.name}`);
    } catch (error) {
        console.log(`Error al conectar a la base de datos ${error}`);
    }
};