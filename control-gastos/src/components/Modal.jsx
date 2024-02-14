import CerrarBtn from '../assets/img/cerrar.svg';
const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const ocultarModal = ()=>{
        
        setAnimarModal(false)

        setTimeout(()=>{
            setModal(false)
        },500)
    }
  return (
    <div className="modal">
      <div className='nuevo-gasto'>
        <img 
        src={CerrarBtn} 
        alt="Botón para cerrar modal"
        onClick={ocultarModal}
         />
      </div>
      <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}

export default Modal
