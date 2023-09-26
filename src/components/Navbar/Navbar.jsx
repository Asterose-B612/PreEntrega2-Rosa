import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';



const Navbar = () => {
    return (<AppBar>
        <Toolbar sx={{backgroundColor:'lightgrey', display: 'flex', justifyContent: 'space-between'}}>
          
            <Typography>Gerhard</Typography>

            <div>
                <Button sx={{color: 'grey'}}>Home</Button>
                <Button sx={{color: 'grey'}}>Smartphones</Button>
                <Button sx={{color: 'grey'}}>Nosotros</Button>
                <Button sx={{color: 'grey'}}>Contacto</Button>
                </div>
          <CartWidget/>

        </Toolbar>
        </AppBar>);
}

export default Navbar;





