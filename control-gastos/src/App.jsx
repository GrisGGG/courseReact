import { useState } from 'react';
import  Header from './components/Header';
import Modal from './components/Modal';
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gasto, setGasto] = useState('');

  const handleNuevoGasto =()=>{
    setModal(true);

    setTimeout(()=>{
      setAnimarModal(true)
      console.log('ANIMANDO');
    }, 500)
  }
  const guardarGasto = (gasto) =>{
    console.log(gasto);
  }

  return (
    <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          presupuestoValido={presupuestoValido}
          setPresupuestoValido={setPresupuestoValido}
          />
          {
            presupuestoValido && (
              <div className='nuevo-gasto'>
                <img
                  src={IconoNuevoGasto}
                  alt='Icono de nuevo gasto'
                  onClick={handleNuevoGasto}
                />
              </div>
            )
          }
          {
            modal && (
              <Modal 
              setModal={setModal}
              animarModal={animarModal}
              setAnimarModal={setAnimarModal}
              guardarGasto={guardarGasto}
              />
            )
          }
    </div>

   
  )
}

export default App
