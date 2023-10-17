import { Card, CardContent, CircularProgress, Typography, Grid } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

//CATEGORIES: CARD CON DISTINTAS CATEGORIAS

const Categories = () => {
    const { data, loading } = useAsyncMock(categories);

    if (loading) return <CircularProgress />;

    return (
        <>
        <div className="container">

            <Typography variant="h4" sx={{color:'#A8A5A5', marginBottom:'3vh'}}>
               Bienvenido, ¿Qué te gustaría elegir hoy?
            </Typography>

            <Grid container sx={{justifyContent:"space-around"}} spacing={7}>

                {data.map((category) => (

                    <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>

                        <Card>
                            <CardContent sx={{color:'grey', textDecoration:'none'}} component={Link} to={`/category/${category.category}`}>
                               
                                <Typography  sx={{fontSize: '20px'}}> 
                                {category.category}
                                </Typography>

                            </CardContent>
                        </Card>

                    </Grid>
                ))}

            </Grid>

        </div>
        
        <Banner/>
        <Footer/>
       </>
    );

}

export default Categories;
