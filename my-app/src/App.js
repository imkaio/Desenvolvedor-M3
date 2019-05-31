import React, { useState }  from 'react'
import Header from './components/header'
import ColorFilters from './components/filters/colorFilter'
import SizeFilters from './components/filters/sizeFilter'
import PriceFilters from './components/filters/priceFilter'
import Products from './components/products'
import Footer from './components/footer'
import './App.scss'


function App() {
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])
    const [price, setPrice] = useState([])

    const filter = (state, setState) => value => {
        if (value.id) {
            return setState(
                state.find(item => item.id === value.id)
                    ? state.filter(item => item.id !== value.id)
                    : [...state, value]
            )
        }

        return setState(
            state.includes(value)
                ? state.filter(item => item !== value)
                : [...state, value]
            )
    }

    return (
        <div>
            <Header />

            <div className="container">
                <section className="main">
                    <div id="filtro">
                        <ColorFilters onChange={filter(color, setColor)}  />
                        <SizeFilters onChange={filter(size, setSize)} />
                        <PriceFilters onChange={filter(price, setPrice)} />
                    </div>
                    <Products color={color} size={size} price={price}/>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default App
