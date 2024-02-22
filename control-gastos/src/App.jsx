import { useState, useEffect } from 'react';
import  Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './components/helpers';
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg';


function App() {
  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length >0){
      handleNuevoGasto();
    }
    
  }, [gastoEditar]);

  const handleNuevoGasto =()=>{
    setModal(true);
    // setGastoEditar({})

    setTimeout(()=>{
      setAnimarModal(true)
      console.log('ANIMANDO');
    }, 500)
  }
  const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
  }

  return (
    <div className={modal ? 'fijar': ''}>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          presupuestoValido={presupuestoValido}
          setPresupuestoValido={setPresupuestoValido}
          gastos={gastos}
          />
          {
          
            presupuestoValido && (
              <>
              <div>
              <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              />
              </div>
              <div className='nuevo-gasto'>
                <img
                  src={IconoNuevoGasto}
                  alt='Icono de nuevo gasto'
                  onClick={handleNuevoGasto}
                />
              </div>
              </>
            )
          }
          {
            modal && (
              <Modal 
              setModal={setModal}
              animarModal={animarModal}
              setAnimarModal={setAnimarModal}
              guardarGasto={guardarGasto}
              gastoEditar={gastoEditar}
              />
            )
          }
    </div>

   
  )
}

export default App
