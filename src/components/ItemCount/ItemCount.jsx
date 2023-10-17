import { useState } from 'react';
//import PropTypes from 'prop-types'; // Importa PropTypes para validar las props

//creo un state de "conteo"
const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
//FUNCIONES DE INCREMENTO Y DECREMENTO → conteo < stock , sumo,y si es >mayor que mi n°inicial,pueda restar 
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) { // Cambiado de "count > initial" a "count > 0"
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };

    return (
        <div style={{ overflow: "hidden" }}>
            <button
                onClick={decrement}
                disabled={count<= initial} 
                style={{ fontSize: "20px", marginRight: "10px", color: "black", borderColor: 'gray' }}>
                -
            </button>

            <span style={{ fontSize: "2vh", marginRight: "1vh", marginLeft: "1vh", color: "black", borderColor: 'gray' }}>{count}</span>

            <button
                onClick={increment}
                disabled={count >= stock}
                style={{ fontSize: "20px", marginLeft: "10px", color: "black", borderColor: 'gray' }}>
                +
            </button>

            {/* BOTON AGREGAR AL CARRITO */}
            <button
                onClick={addToCart}
                disabled={count === 0}
                style={{
                    fontSize: "1.8vh",
                    backgroundColor: "gray",
                    color: "lightgray",
                    padding: "5px 10px",
                    marginLeft: "20px",
                    borderRadius: "5px",
                    border: "none",
                }}>
                Agregar al carrito
            </button>
        </div>
    );
};

// Define la validación de tipo para las props


{/* 
    ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
  };
*/}
export default ItemCount;
