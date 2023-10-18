import { createContext, useContext, useState } from 'react';

// Creo un contexto para el carrito de compras
export const CartContext = createContext([]);
//Lo exporto a Cart Widget
export const useCartContext = ()=> useContext (CartContext);

// Es el componente de proveedor del contexto
const CartProvider = ({ children }) => {
     // Para Almacenar los productos en el carrito
    //este es mi estado inicial
  const [cart, setCart] = useState({ items: [], total: 0 })
//AA PRODUCTOS AL CARRITO es como un handle, quiero algo que me agarre el producto y me setee el producto en el carrito
  
//para agregar producto
const addToCart = (product) => {

   setCart((prevCart) => ({...prevCart,

     items:[prevCart.items, product],
     
     total: prevCart.total + product.price *product.quantity
     }))
     
   
   }

const removeFromCart = (productId) => {
  setCart((prevCart) => {
    // Filtrar los productos en el carrito para eliminar el que coincida con el productId
    const updatedItems = prevCart.items.filter((item) => item.id !== productId);

    // Calcular el nuevo total
    const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);

    return {
      ...prevCart,
      items: updatedItems,
      total: updatedTotal,
    };
  });
};

//esta sintaxis SIEMPRE VA A SER IGUAL cuado yo tenga un contexto
return (
  <CartContext.Provider value = {{cart, addToCart, removeFromCart }}>
    {children}
  </CartContext.Provider>
)


 }
export default CartProvider;