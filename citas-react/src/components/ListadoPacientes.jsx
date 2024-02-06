import Paciente from "./Paciente"
function ListadoPacientes({pacientes}) {
  
 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
        Listado de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center">
        Adimistra tus {''}
        <span className="text-indigo-600 bold">
          Pacientes y Citas</span>
      </p>
    {
       pacientes.map(paciente =>(
        <Paciente 
        key = {paciente.id}
         paciente = {paciente}/>
      ))
    
      
    }
      
    </div>
  )
}

export default ListadoPacientes
