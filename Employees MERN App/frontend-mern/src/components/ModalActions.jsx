import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import Swal from 'sweetalert2'


const ModalActions = ({ open, onCloseModal, getEmployees, edit, employee }) => {

    const initialState = {
        nombre: '',
        apellidos: '',
        ide: '',
        tcontrato: 'Fijo'
    }

    const [dataEmployee, setDataEmployee] = useState(initialState)
    const tcontratos = ['Fijo', 'Temporal', 'Practicante']

    useEffect(() => {
        edit ? setDataEmployee(employee.item) : setDataEmployee(initialState)
        //eslint-disable-next-line
    }, [edit, employee])

    const handleChange = (e) => {
        setDataEmployee({ ...dataEmployee, [e.target.name]: e.target.value })
    }

    const actions = async(e) => {
        e.preventDefault();
        try {
            let resp = {}
            edit ? (resp = await axios.put(`/employee/update/${employee.item._id}`, dataEmployee)) : 
            (resp = await axios.post('/employee', dataEmployee))
            Swal.fire({
                icon: 'success',
                title: resp.data.message,
                showConfirmButton: false,
                timer: 2000
            })
            onCloseModal()
            getEmployees()
        } catch (error) {
            if (!error.response.data.ok) {
                return Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
            console.log("Error en la función saveEmployee", error)
        }
    }


    return (
        <Modal open={open} onClose={onCloseModal} center>
            <div className="card">
                <div className="card-header">
                    <h5>{edit ? 'Editar empleado' : 'Agregar empleado'}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={actions}>
                        <div className="mb-3">
                            <label className='form-label'>Nombres</label>
                            <input type="text" name="nombre" className='form-control'
                                onChange={(e) => handleChange(e)}
                                required autoFocus value={dataEmployee.nombre} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Apellidos</label>
                            <input type="text" name="apellidos" className='form-control'
                                onChange={(e) => handleChange(e)}
                                required value={dataEmployee.apellidos} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Identificación</label>
                            <input type="text" name="ide" className='form-control'
                                onChange={(e) => handleChange(e)}
                                required value={dataEmployee.ide} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Tipo de contrato</label>
                            <select name="tcontrato" className='form-select'
                                onChange={(e) => handleChange(e)}
                                value={dataEmployee.tcontrato}
                            >
                                {
                                    tcontratos.map((item, i) => (
                                        <option key={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className='btn btn-primary form-control'>
                                {edit ? 'Actualizar' : 'Guardar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default ModalActions