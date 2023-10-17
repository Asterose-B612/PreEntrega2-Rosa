//import {useContext} from 'react';
//import {CartContext} from '../../context/CartContext';
//import {CartItem} from '../CartItem/CartItem';
//import { Link } from 'react-router-dom';


const Cart = ()=> {

const {cart, clearCart, totalQuantity, total}= useContext (CartContext)
  
if(totalQuantity ===0) {

    return(

        <div>
        
            <h1>No hay productos en el carrito</h1>
      
             <link to='/'>Productos</link>
             
        </div>
      
      )
    }

return (

    <div>

        {cart.map(p=> <CartItem key={p.id}{...p}/>)}

        <h3>Total: ${total}</h3>
        
        <button onClick={()=> clearCart()}>Vaciar carrito</button>

        <link to='/checkout'>Checkout</link>

    </div>
)
  
}

export default Cart;