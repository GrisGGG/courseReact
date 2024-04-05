import { useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import {db} from "./data/db"
import { useState } from "react"
function App() {
    //state
    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);

    function addToCart(item){
        const itemExists = cart.findIndex(guitar => guitar.id == item.id)
        if(itemExists >= 0){//Sí existe
            const updatedCart = [...cart]//tomo una copia del state
            updatedCart[itemExists].quantity++;//en esta copia busco la pocision que ya existe y en el atributo quantity le aumento un uno
            setCart(updatedCart)//actualizo el estado con la copia de este state
        }else{
            item.quantity =1;
            setCart(prevCart => [...prevCart, item])
        } 
    }
    function removeFromCart(id){
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

  return (
   <>
   <Header
   cart={cart}
   removeFromCart={removeFromCart}
   ></Header>
   
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar)=>(
            <Guitar
            key={guitar.id}
            guitar={guitar}
            addToCart={addToCart}
            />   
            ))    
}        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
   </>
  )
}

export default App
