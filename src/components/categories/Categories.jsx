import React from 'react';
import { Card, CardContent, CircularProgress, Typography, Grid } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories);

    if (loading) return <CircularProgress />;

    return (

        <div className="container">

            <Typography variant="h4" style={{ color: "grey" }}>

                Categorías
            </Typography>

            <Grid container spacing={2}>

                {data.map((category) => (

                    <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>

                        <Card>
                            <CardContent component={Link} to={`/category/${category.category}`}>
                                <Typography>{category.category}</Typography>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}

            </Grid>

        </div>
    );
}

export default Categories;
