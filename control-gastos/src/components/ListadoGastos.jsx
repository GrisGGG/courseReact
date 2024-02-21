import Gasto from "./Gasto"

const ListadoGastos = ({gastos}) => {
  return (
    <div>
      <p>{gastos.length ? 'gastos': 'no hay gastos'}</p>
     
      {gastos.map(gasto => <Gasto
        key={gasto.id}
        gasto={gasto}
      />)}
    </div>
  )
}

export default ListadoGastos
