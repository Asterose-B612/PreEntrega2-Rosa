import { Modal, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment'
import ItemCount from "../ItemCount/ItemCount";
import {useState } from "react";
import { useCartContext} from "../../context/CartContext"


const ProductInfo = ({ product, open, setOpen }) => {

    const { id, image, title, price, isAnOffer, itHasDues, stock } = product
//una vez que tengo el contexto ↓ agrego este
    const {addToCart} = useCartContext();

    const [quantityInCart, setQuantityInCart] = useState(0);


    const handleClose = () => {
        setOpen(prev => !prev)
    }


    // Función para manejar la compra
    const handleAddToCart = (count) => {

        setQuantityInCart(count);

        console.log('agregado', count)

        
        if (count > 0 ) {
            addToCart({
                id, title, image, price, quantity: count
            })
       
        }
    };

/**agrego el ITEM COUNT y le paso los valores de stock, el valor inicial que siempre sería uno y por ahora en el on Add hago un clg */
    return (
    <>
        <Modal open={true} onClose={handleClose}>

            <div className="modal-content">

                <img style={{widht: "70%"}} src={image}/>

                <Typography variant="h4">{title}</Typography>

                <Typography variant="h6" color="primary"> ${price.toFixed(2)}</Typography>
                
                <Typography>stock: {stock}</Typography>
                
                <div className="modal-scroll-content">
                  
                    <Typography variant="body2" color="textSecondary">
                      
                        { itHasDues && (<>
                                <PaymentIcon /> Hasta 6 cuotas sin interés </>)}
                    </Typography>

                    
                    <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
              
                </div>
            </div>
        </Modal>
    </>);
}

export default ProductInfo;