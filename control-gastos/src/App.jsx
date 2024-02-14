import { useState } from 'react';
import  Header from './components/Header';
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNuevoGasto =()=>{
    console.log('clickeaste nuevo');
    setModal(true);
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
              <p>desde modal</p>
            )
          }
    </div>

   
  )
}

export default App
