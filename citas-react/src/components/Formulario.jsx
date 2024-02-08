import { useState, useEffect } from "react";
import Error from "./Error";


function Formulario({pacientes,setPacientes, paciente, setPaciente}) {
  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ alta, setAlta ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [ error, setError ] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])
  const generarID = ()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return fecha + random;
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('enviado form');
    if([nombre, propietario, email,alta, sintomas].includes('')){
      console.log('almenos un campo esta vacio');
      setError(true);
      return;
    }
    setError(false);
    //Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email,
      alta, 
      sintomas,
    }

    //Si el objeto paciente tiene id
    if(paciente.id){
      //se edita el registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados);
      setPaciente({});

    }else{
      //Si no se genero un nuevo registro
      objetoPaciente.id = generarID();
       // console.log(objetoPaciente);
    //tOMA UNA COPIA DEL []PACIENTES Y LE AGREGA EL OBJETO PACIENTES POR MEDIO DE SETPACIENTES
      setPacientes([...pacientes, objetoPaciente]);

    }
   
   

    
    //Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form  onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && <Error mensaje= "Todos los campos son obligatorios."/>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={nombre}
            onChange={(e)=>{setNombre(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={propietario}
            onChange={(e)=>{setPropietario(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={alta}
            onChange={(e)=>{setAlta(e.target.value)}}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e)=>{setSintomas(e.target.value)}}
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
         hover:bg-indigo-700 cursor-pointer transition-all "
         value={paciente.id ?  'Guardar Cambios' : 'Agregar Paciente'}
        />
      </form>
    </div>

  )
}

export default Formulario

