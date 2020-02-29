import React from 'react'
import ProductItem from './productItem';
import shortid from 'shortid';

const ProductListContainer = ({
    products,
    category
}) => {

    var filteredList = [...products];;
    if (category){
        filteredList = filteredList.filter(item => item.category===category);
    }

    
 

    return (
        <div>
            <h5 className="md-cell md-cell--12">Showing {filteredList.length} - hidden {products.length -filteredList.length } </h5>
            <section className=" md-cell md-cell--12">

                {filteredList.map(item => {
                    return (
                        <div key={shortid.generate()} className=" md-cell md-cell--12">
                            <ProductItem product={item} />
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default ProductListContainer;