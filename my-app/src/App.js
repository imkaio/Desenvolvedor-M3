import React, { useState }  from 'react';
import './App.scss';
import Header from './components/header'
import ColorFilters from './components/filters/colorFilter'
import SizeFilters from './components/filters/sizeFilter'
import PriceFilters from './components/filters/priceFilter'
import Products from './components/products'
import Footer from './components/footer'


function App() {

    const [color, setColor] = useState()
    const [size, setSize] = useState()
    const [price, setPrice] = useState()

    const colorFilter = (value) => {
        setColor(value === color ? null : value)
    }
    const sizeFilter = (value) => {
        setSize(value === size ? null : value)
    }
    const priceFilter = (value) => {
        setPrice(value === price ? null : value)
        console.log('hi')
    }

  return (
      <div>
          <Header />

          <div className="container">
              <section className="main">
                  <div id="filtro">
                    <ColorFilters onChange={colorFilter}  />
                    <SizeFilters onChange={sizeFilter} />
                    <PriceFilters onChange={priceFilter} />
                  </div>
                  <Products color={color} size={size} price={price}/>
              </section>
          </div>
          <Footer />
      </div>
  );
}

export default App;
