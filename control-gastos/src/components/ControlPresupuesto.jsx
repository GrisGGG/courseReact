import { useState, useEffect } from 'react';
import { CircularProgressbar} from 'react-circular-progressbar';
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'

const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setPresupuestoValido
}) => {

    const [porcentaje, setPorcentaje] = useState(20)
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado;
        
        //calcular porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) *100).toFixed(2)

        
        setDisponible(totalDisponible);
        setGastado(totalGastado);
        
        setTimeout(()=>{
            setPorcentaje(nuevoPorcentaje);
        },1400)

    }, [gastos])

    const formatearCantidad = (cantidad) =>{
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    const handleReset = ()=>{
        const resultado = confirm('¿Deseas resetear la app?');
        if(resultado){
            setGastos([])
            setPresupuesto(0);
            setPresupuestoValido(false);
            
            
        }
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
        <Heat
  progress={porcentaje}
  range ={{ from: 0, to: 100 }}
  sign={{ value: '%', position: 'end' }}
  showValue={true}
  revertBackground={false}
  text={'Gastado'}
  sx={{
    barWidth: 5,
    bgColor: '#dadada',
    shape: 'half',
    valueSize: 13,
    textSize: 13,
    valueFamily: 'Trebuchet MS',
    textFamily: 'Trebuchet MS',
    valueWeight: 'normal',
    textWeight: 'normal',
    textColor: '#000000',
    valueColor: '#000000',
    loadingTime: 1000,
    strokeLinecap: 'round',
    valueAnimation: true,
    intersectionEnabled: true
  }}
/>
        </div>
        <div className="contenido-presupuesto">
            <button
            className='reset-app'
            type='button'
            onClick={handleReset}
            >Resetear App</button>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo': ''}`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
