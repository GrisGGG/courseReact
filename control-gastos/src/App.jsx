import { useState, useEffect } from 'react';
import  Header from './components/Header';
import Filtros from './components/Filtros';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './components/helpers';
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg';


function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if(Object.keys(gastoEditar).length >0){
      handleNuevoGasto();
    }
    
  }, [gastoEditar]);

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])
  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos))
  },[gastos])

  useEffect(()=>{
      if(filtro){
        const gastosFiltrados = gastos.filter(gasto =>gasto.categoria === filtro)
        setGastosFiltrados(gastosFiltrados);
      }
  },[filtro])
  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto'))
    presupuestoLS >0 && setPresupuestoValido(true)
  },[])

  const handleNuevoGasto =()=>{
    setModal(true);
    // setGastoEditar({})

    setTimeout(()=>{
      setAnimarModal(true)
    }, 500)
  }
  const guardarGasto = gasto =>{
    if(gasto.id){
      //Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id ===
        gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({})
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(()=>{
      setAnimarModal(false)
    }, 500)

   
  }
  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados);
  }

  return (
    <div className={modal ? 'fijar': ''}>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          presupuestoValido={presupuestoValido}
          setPresupuestoValido={setPresupuestoValido}
          gastos={gastos}
          setGastos={setGastos}
          />
          {
          
            presupuestoValido && (
              <>
              <main>
                <Filtros
                filtro={filtro}
                setFiltro={setFiltro}
                />
              <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
              setGastosFiltrados={setGastosFiltrados}
              />
              </main>
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
              setGastoEditar={setGastoEditar}
              />
            )
          }
    </div>

   
  )
}

export default App
