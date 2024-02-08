import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import { useState, useEffect } from 'react';
function App() {
  //Aquí van las funciones
  /**REGLAS DE LOS HOOKS
   * Se deben colocar en la parte superior de los componentes.
   * No se deben colocar dentro de condicionales,tampoco después de un return
   * 
   */
  const [ pacientes, setPacientes ] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? []);
  //edición de un nuevo paciente
  const [paciente, setPaciente] = useState({});
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);

  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

 
  return (
    //Aqui los componentes
    <>
      <div className='container mx-auto'>
        <Header/>
        <div className='mt-12 md:flex'>
          <Formulario
          pacientes = { pacientes }
          setPacientes = { setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          />
          <ListadoPacientes
           pacientes = {pacientes}
           setPaciente = {setPaciente}
           eliminarPaciente = {eliminarPaciente}
          />
        </div>
        
      </div>
    </>
  )
}

export default App
