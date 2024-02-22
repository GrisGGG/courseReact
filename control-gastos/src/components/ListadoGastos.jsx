import Gasto from "./Gasto"

const ListadoGastos = ({
  gastos, 
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
  setGastosFiltrados
}) => {
  return (
    <div className="listado-gastos contenedor">
    {
      filtro ? (
        <>
          <p>{gastosFiltrados.length ? 'Gastos': 'No hay gastos aún de esta categoria'}</p>
     
     {gastosFiltrados.map(gasto => <Gasto
       key={gasto.id}
       gasto={gasto}
       setGastoEditar={setGastoEditar}
       eliminarGasto={eliminarGasto}
     />)}
        </>
      ):(
        <>
          <p>{gastos.length ? 'Gastos': 'No hay gastos aún'}</p>
     
     {gastos.map(gasto => <Gasto
       key={gasto.id}
       gasto={gasto}
       setGastoEditar={setGastoEditar}
       eliminarGasto={eliminarGasto}
     />)}
        </>
      )
    }
    </div>
  )
}

export default ListadoGastos
