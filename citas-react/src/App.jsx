import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
function App() {
  //Aquí van las funciones
  return (
    //Aqui los componentes
    <>
      <div className='container mx-auto'>
        <Header/>
        <div className='mt-12 md:flex'>
          <Formulario/>
          <ListadoPacientes/>
        </div>
        
      </div>
    </>
  )
}

export default App