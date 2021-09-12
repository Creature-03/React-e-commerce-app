import React, { useState, useEffect } from 'react'

import Products from './components/Products/Products/Products';
import Navbar from './components/Products/Navbar/Navbar';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App
