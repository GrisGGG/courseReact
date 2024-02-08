import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import { useState } from 'react';
function App() {
  //Aquí van las funciones
  /**REGLAS DE LOS HOOKS
   * Se deben colocar en la parte superior de los componentes.
   * No se deben colocar dentro de condicionales,tampoco después de un return
   * 
   */
  const [ pacientes, setPacientes ] = useState([]);
  //edición de un nuevo paciente
  const [paciente, setPaciente] = useState({});
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
          />
        </div>
        
      </div>
    </>
  )
}

export default App
