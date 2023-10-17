import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './CartWidget.css';
import { Typography } from '@mui/material';
import {useCartContext } from '../../context/CartContext';

const CartWidget = () => {

  const iconStyle = {
    fontSize: '4vh',
    color:'#AB0C0C'
  };

const { cart } = useCartContext();

  return (

    <div style={{ display:"flex", alignItems: "center"}}>

      <AddShoppingCartSharpIcon style={iconStyle} />

      <Typography>
        {/**viene un objeto que tiene un array adentro y que tieneun */}
        {cart.items.length}
      </Typography>

    </div>
  );
}

export default CartWidget;
