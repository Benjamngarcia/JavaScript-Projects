import { Router } from 'express'
import { empleadoCtrl } from '../controllers/empleado.js'
import { verificarToken } from '../middleware/auth.js';
const route = Router()

route.get('/', empleadoCtrl.listAllEmployees);

route.post('/', verificarToken, empleadoCtrl.createEmployee);
route.get('/listid/:id', verificarToken, empleadoCtrl.listById);
//get employees by boss
route.get('/getemployee', verificarToken, empleadoCtrl.listEmployeeBoss);

route.delete('/:id', verificarToken, empleadoCtrl.deleteEmployee);
route.put('/update/:id', verificarToken, empleadoCtrl.updateEmployee);
route.get('/search/:nombre', verificarToken, empleadoCtrl.searchEmployee);

export default route;