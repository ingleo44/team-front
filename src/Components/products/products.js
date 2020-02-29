/* RoutingExample.jsx */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import ProductCategoriesNav from './productCategoriesNav';
import { productList } from '../../Constants/productList';

const products = productList();

class Products extends PureComponent {
    
    render() {
        
        return (
            <div>               
                <ProductCategoriesNav products={products} />                      
            </div>

        );
    }
}
export default withRouter(Products);






