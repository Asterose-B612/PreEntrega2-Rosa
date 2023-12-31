import { useParams } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from '../../mocks/products.json';
import { CircularProgress, Grid } from "@mui/material";
import ProductDetail from "../products/ProductDetail";

//CATEGORIES PRODUCT LIST: PARA INGRESAR A LAS CATEGORIAS E INGRESAR A LOS DETALLES DE LOS PRODUCTOS

//etiqueta Grid de Mui prearmada. BOOTstrap y otras librerias hay que trabajar con grid
//grilla de MUI establecida

const CategoriesProductList = () => {

    const { categoryId } = useParams();

    const { data, loading } = useAsyncMock(products);

    if (loading) return <CircularProgress />

    const categorySelected = data.filter(category => category.category.toLowerCase() === categoryId.toLocaleLowerCase());

    return (<div className="container">

        <Grid container spacing={3}>

            {categorySelected.map((product) => {

                return <ProductDetail key={product.id} product={product} />
            })}
        </Grid>
    </div>);
}

export default CategoriesProductList;