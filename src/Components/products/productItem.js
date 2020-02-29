import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

const style = { width: '100%' };

const ProductItem = ({
  product
}) => <Card style={style} className="md-block-left">
                <CardTitle title={product.title} subtitle={product.subtitle} />
                <CardText>
                    <div className="md-grid">
                        <div className="md-cell md-cell--3">
                            <img style={{
          width: "90%"
        }} src={product.image} alt="productPicture"></img>
                        </div>
                        <div className="md-cell md-cell--9">
                            <p>
                                {product.description}
                            </p>
                        </div>
                        <div className="md-cell md-cell--12">
                        <b>Stock:</b> {product.stock}
                        </div>
                        <div className="md-cell md-cell--12">
                        <b>Price:</b> ${product.price}
                        </div>
                    </div>
                    
                </CardText>
            </Card>;




export default ProductItem;