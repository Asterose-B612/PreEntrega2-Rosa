import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';
import Footer from '../Footer/Footer';

const Contacto = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ marginTop: '10vh' }}>
      {/* Grid container spacing 3: creo contenedor de cuadrícula que divide la página en filas y columnas (3= 3 unidades entre los elementos de la cuadrícula) */}
      <Grid container spacing={3}>
        {/* cree una cuadrícula dentro del contenedor. en xs-->ocupa todo el ancho y en md la mitad-->6u. o sea 2 columnas */}
        <Grid item xs={12} md={6}>
          {/* gutterBottom crea margen inferior */}
          <Typography variant="h4" gutterBottom>
            ¡Contáctanos!
          </Typography>
          {/* Mui--> grid container.(cuadrícula) Info a la izquierda */}
          <Typography paragraph>
            En Gerhard, nos apasiona ofrecer la tecnología más avanzada a nuestros clientes. Si tienes alguna pregunta, sugerencia o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estamos aquí para ayudarte en todo momento.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Información de Contacto:
          </Typography>

          <Typography paragraph>
            <strong>Dirección de la Tienda Física:</strong><br />
            Calle Principal, #123<br />
            Ciudad CABA<br />
            Código Postal 12345<br />
            Argentina
          </Typography>

          <Typography paragraph>
            <strong>Horario de Atención:</strong><br />
            Lunes a Viernes: 9:00 am - 7:00 pm<br />
            Sábados: 10:00 am - 4:00 pm<br />
            Domingos y Feriados: Cerrado
          </Typography>

          <Typography paragraph>
            <strong>Atención al Cliente por Teléfono:</strong><br />
            +54 9 11 4456-7890
          </Typography>

          <Typography paragraph>
            <strong>Correo Electrónico de Atención al Cliente:</strong><br />
            <a href="mailto:info@gerhard-tech.com">info@gerhard-tech.com</a>
          </Typography>

        </Grid> {/* fin columna izquierda */}

        {/* creo cuadrícula para el FORMULARIO A LA DERECHA */}
        <Grid item xs={12} md={6}>

          <Box sx={{ maxWidth: 400 }}>

            <Typography variant="h5" sx={{ marginTop: '4vh' }}>
              Formulario de Contacto:
            </Typography>
            {/* creo otro contenedor de cuadrícula dentro de la columna derecha. objetivo: organizar elementos del formulario. (espacio 2u.) */}
            <Grid container spacing={2}>
              <Grid item xs={12}>

                <TextField
                  label="Nombre"
                  fullWidth 
                  variant="outlined"/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Correo Electrónico"
                  fullWidth
                  variant="outlined"/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Mensaje"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"/>
              </Grid>

            </Grid>

            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}>
              Enviar
            </Button>

          </Box>

       
        </Grid>
      </Grid> {/* Cierre del contenedor de cuadrícula */}
    </Container>

     <Footer/>
</>

  );
};

export default Contacto;
