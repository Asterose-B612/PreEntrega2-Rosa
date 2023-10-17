import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {

    const estiloBoton = {

        textTransform: 'none',

        fontSize: '1.8vh',

        color: '#333',

        border: 'none', // Elimina el borde del botón

        backgroundColor: 'transparent', // Fondo transparente

        transition: 'transform 0.2s',

      };


    return (
    
    <AppBar>

        <Toolbar sx={{backgroundColor:'lightgrey', display: 'flex', justifyContent: 'space-between'}}>
          
            <Typography sx={{fontSize: '40px', fontWeight: 'bold' }}>
                
                Gerhard
            
            </Typography>

            <nav>
                <div>
                   
                     <Link to="/home"><Button className= 'button' sx={estiloBoton}>Home</Button></Link>

                     <Link  to="/Nosotros"><Button sx={estiloBoton}>Nosotros</Button></Link>

                     <Link  to="/contacto"><Button sx={estiloBoton}>Contacto</Button></Link>

                </div>
            </nav>

          <CartWidget/>

        </Toolbar>

    </AppBar>);
}

export default NavBar;





