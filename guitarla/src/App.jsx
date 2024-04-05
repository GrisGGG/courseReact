import { useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import {db} from "./data/db"
import { useState } from "react"
function App() {
    //state
    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);
    const MAX_ITEMS =5;

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
    function increaseQuantity(id){   
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEMS){
                return{
                    ...item,
                    quantity : item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id){   
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > 1){
                return{
                    ...item,
                    quantity : item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

  return (
   <>
   <Header
   cart={cart}
   removeFromCart={removeFromCart}
   increaseQuantity={increaseQuantity}
   decreaseQuantity={decreaseQuantity}
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
