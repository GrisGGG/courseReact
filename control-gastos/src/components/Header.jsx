import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <div>
      <NuevoPresupuesto
       presupuesto={presupuesto}
       setPresupuesto={setPresupuesto}
      />
    </div>
  )
}

export default Header
