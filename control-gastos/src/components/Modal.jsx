import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../assets/img/cerrar.svg';


const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar,setGastoEditar}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria]= useState(''); 
  const [mensaje, setMensaje] = useState('');
  const [fecha, setFecha] = useState('');
  const [id, setId] = useState('');
  
  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);

    }
  }, [])


  const ocultarModal = ()=>{
        
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(()=>{
            setModal(false)
        },500)
    }
  
  const handleSubmit = (e)=>{
      e.preventDefault();
      if([nombre,cantidad,categoria].includes('')){
        setMensaje('Todos los campos son oblicatorios');
      }
      setTimeout(()=>{
        setMensaje('')
      }, 2000)
      guardarGasto({nombre, cantidad,categoria, id, fecha})

      setAnimarModal(false)

      setTimeout(()=>{
          setModal(false)
      },500)
      return;
     
  }
  
  return (
    <div className="modal">
      <div className='nuevo-gasto'>
        <img 
        src={CerrarBtn} 
        alt="Botón para cerrar modal"
        onClick={ocultarModal}
         />
      </div>
      <form 
      onSubmit={handleSubmit}
      className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            id='nombre'
            type='text'
            placeholder='Añade el nombre del gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor='gasto'>Cantidad de gasto Gasto</label>
          <input
            id='gasto'
            type='number'
            placeholder='Añade la cantidad del gato'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='categoria'>
          <label htmlFor='categoria'>Categoria del gasto Gasto</label>
          <select
          id='categoria'
          value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
          </select>
        </div>
        <input
        type='submit'
        value={gastoEditar.nombre ? 'Guardar Gasto' : 'Añadir'}
        />
      </form>
    </div>
  )
}

export default Modal
