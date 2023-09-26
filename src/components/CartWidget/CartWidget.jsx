import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './CartWidget.css';



const CartWidget = () => {

    return (<> <div className='divCart'><AddShoppingCartSharpIcon/> <span className='number'>0</span></div> </>);
}

export default CartWidget;