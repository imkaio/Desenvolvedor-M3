import React from 'react';
import './style.scss';
import products from '../../mocks/products.json';
console.log(products);

const Products = (props) => (
    <div id="produtos">
        <div className="produtos__content">

            {products.filter(product => props.color ? product.colorFilters.includes(props.color) : product).map(product => (

                <div className="produtos__item" key={product.name}>
                    <img src={product.image} alt="the-king-kitchen"/>
                    <div className="produtos__item--info">
                        <div className="produtos__item--info--nome">
                            {product.name}
                        </div>

                        <div className="produtos__item--info--preco">
                            {product.price}
                            <span>ou 3x de R$ 9,33</span>
                        </div>

                        <div className="produtos__item--info--botao">
                            <button className="produtos__item--btn">COMPRAR AGORA</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </div>
);

export default Products;