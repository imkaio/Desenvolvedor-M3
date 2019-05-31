import React from 'react'
import products from '../../mocks/products.json'
import './style.scss'

function Products({ color, size, price }) {
    const prices = (price) => {
        if (!price.length) return {}

        const min = Math.min(...price.map(item => item.min))
        const max = Math.max(...price.map(item => item.max))
        return { min, max }
    }

    const filterProducts = product => {
        const hasColor = color.length
            ? product.colorFilters.find(item => color.includes(item))
            : true

        const hasSize = size.length
            ? product.sizeFilters.find(item => size.includes(item))
            : true

        const { min, max } = prices(price) 

        const hasPrice = price.length
            ? product.price >= min && product.price <= max
            : true

        return hasColor && hasSize && hasPrice
    }

    const filteredProducts = products.filter(filterProducts)

    return (
        <div id="produtos">
            <div className="produtos__content">
    
                {filteredProducts.length ? 
                    filteredProducts.map(product => (
                        <div className="produtos__item" key={product.name}>
                            <img src={product.image} alt="the-king-kitchen"/>
                            <div className="produtos__item--info">
                                <div className="produtos__item--info--nome">
                                    {product.name}
                                </div>
    
                                <div className="produtos__item--info--preco">
                                    {product.price},00
                                    <span>ou 3x de R$ 9,33</span>
                                </div>
    
                                <div className="produtos__item--info--botao">
                                    <button className="produtos__item--btn">COMPRAR AGORA</button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div>Não foram encontrados produtos com os filtros selecionados</div>    
                    )}
            </div>
        </div>
    )
}

export default Products
