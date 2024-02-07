import Paciente from "./Paciente"
function ListadoPacientes({pacientes}) {
  
 console.log(pacientes.length);
  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
{/* texto condicional si hay pacientes o no */}
      {pacientes && pacientes.length ? 
      (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-lg mt-5 text-center">Adimistra tus {''}
          <span className="text-indigo-600 bold">Pacientes y Citas</span>
          </p>
          {
          pacientes.map(paciente =>(
          <Paciente 
          key = {paciente.id}
          paciente = {paciente}/>
      ))
          }
        </>
      )
      :
      (
        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="text-lg mt-5 text-center">Comienza agregando pacientes {''}
        <span className="text-indigo-600 bold">
        y aparecerán aquí.</span>
        </p>
        </>
      )}  
    </div>
  )
}

export default ListadoPacientes;