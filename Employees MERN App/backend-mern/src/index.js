import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './database.js';
import userRoute from './routes/usuario.js'
import employeeRoute from './routes/empleado.js'

connectDB();

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({origin:"*"}));

app.use('/', userRoute)
app.use('/employee', employeeRoute)


app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})