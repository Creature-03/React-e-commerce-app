import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../Product/Product';
import useStyles from './ProductsStyles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$60', image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80', },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$500', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80', }
];

const Products = () => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className='classes.toolbar' />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;