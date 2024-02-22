import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div>
      <p>{gastos.length ? 'gastos': 'no hay gastos'}</p>
     
      {gastos.map(gasto => <Gasto
        key={gasto.id}
        gasto={gasto}
        setGastoEditar={setGastoEditar}
      />)}
    </div>
  )
}

export default ListadoGastos
