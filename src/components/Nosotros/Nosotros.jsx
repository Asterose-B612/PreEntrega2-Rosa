
import { Container, Typography, Paper } from '@mui/material';
import Footer from '../Footer/Footer';

const Nosotros = () => {

    const styles = {

         title: {
            marginTop: '2vh',

            marginBottom: '2vh',

            textIndent: '20px' //MUI: sangría
        },

        };

  return (
<>
    <Container maxWidth="lg"  sx={{ marginTop: '10vh' }}>

    <Typography variant="h4" align="center" sx={styles.title}>
            Sobre Nosotros
      </Typography>

      {/*papaer--> mui: simula una hoja; elevation aplica la sombra, y el 3 es el valor:*/ }
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#CFCCCC'}}>

        <Typography variant="body1" sx={styles.title}>
          Nuestro compromiso es llevar la innovación y la tecnología de vanguardia directamente a tus manos. Somos más que una tienda en línea de productos electrónicos; somos tu socio confiable en el mundo de la informática y la comunicación móvil.
        </Typography>

        <Typography variant="body1" sx={styles.title}>
          Desde nuestro inicio, nos hemos dedicado a seleccionar cuidadosamente las marcas y modelos más prestigiosos del mercado de alta gama. Entendemos que la tecnología no es solo una herramienta, sino una experiencia que impulsa tu vida diaria. Por eso, nos esforzamos por brindarte lo mejor en laptops, notebooks y smartphones, aquellos que cumplen tus necesidades y superan tus expectativas.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Nuestra Misión
        </Typography>

        <Typography variant="body1" sx={styles.title}>
         Nuestra misión es ofrecer a nuestros clientes una selección excepcional de productos tecnológicos de alta calidad. Nos esforzamos por brindar soluciones que sean elegantes, potentes y que se adapten a tu estilo de vida. Queremos que nuestros clientes se sientan empoderados y conectados a través de la tecnología que ofrecemos.
        </Typography>

        <Typography variant="h5"  gutterBottom>
          ¿Por qué elegirnos?
        </Typography>

        <Typography sx={styles.title}>
          Nos enorgullece brindar productos de alta gama y un servicio excepcional a nuestros clientes. Nuestro equipo está formado por expertos en tecnología que pueden asesorarte en la elección de los dispositivos que mejor se adapten a tus necesidades. Además, ofrecemos envío rápido y seguro, garantías sólidas y una experiencia de compra sin igual.
        </Typography>
       

        <Typography variant="body1" sx={styles.title}>
          1. <strong>Calidad Superior:</strong> Nuestro compromiso con la calidad es inquebrantable. Cada producto que ofrecemos ha sido probado y seleccionado por su rendimiento excepcional.
        </Typography>

        <Typography variant="body1"  sx={styles.title}>
          2. <strong>Variedad de Elección:</strong> En Gerhard, sabemos que la elección es fundamental. Por eso, ofrecemos una amplia gama de productos para que puedas encontrar exactamente lo que necesitas.
        </Typography>

        <Typography variant="body1"  sx={styles.title}>
          3. <strong>Atención al Cliente Excepcional:</strong> Estamos aquí para ayudarte en cada paso del camino. Nuestro equipo de servicio al cliente está listo para responder a tus preguntas y brindarte asistencia personalizada.
        </Typography>

        <Typography variant="body1"  sx={styles.title}>
          4. <strong>Entrega Rápida y Segura:</strong> Entendemos que deseas disfrutar de tus nuevos dispositivos lo antes posible. Nos aseguramos de que tus productos lleguen a ti de forma segura y rápida.
        </Typography>

        <Typography variant="body1"  sx={styles.title}>
          5. <strong>Actualizaciones Periódicas:</strong> Mantenemos un ojo constante en las últimas tendencias tecnológicas y actualizamos regularmente nuestro inventario para que siempre tengas acceso a lo último en tecnología.
        </Typography>

        <Typography variant="body1">
          Gerhard es más que una tienda en línea; somos tu puerta de entrada a un mundo de innovación y rendimiento. Nos enorgullece ser tu elección cuando se trata de laptops, notebooks y smartphones de alta gama. Gracias por confiar en nosotros para satisfacer tus necesidades tecnológicas.
        </Typography>

        <Typography variant="body1">
          Únete a la experiencia Gerhard y descubre cómo la tecnología de alta gama puede transformar tu vida.
        </Typography>

      </Paper>

    </Container>
    <Footer/>
    </>
  );
};

export default Nosotros;

