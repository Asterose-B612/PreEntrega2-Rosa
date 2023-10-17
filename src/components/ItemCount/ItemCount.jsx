import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

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
                disabled={count === 0} // Cambiado de "count === initial" a "count === 0"
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
}

export default ItemCount;
