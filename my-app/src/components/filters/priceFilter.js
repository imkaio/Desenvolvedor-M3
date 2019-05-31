import React from "react";
import './style.scss'

const PriceFilters = (props) => {
    const filters = [{ min: 0, max: 50 }, { min: 51, max: 150 }, { min: 151, max: 300 }, { min: 301, max: 500 }]
    const handleChange = (e) => {
        console.log(e.target.value)
        return props.onChange(e.target.value);
    }

    return (
        <div className="filtro__box">
            <div className="filtro__box-titulo">
                faixa de preços
            </div>

            <div className="filtro__box-opcoes">
                <ul>
                    {filters.map((filter, index) => (

                    <li key={index}>
                        <input type="checkbox" onChange={handleChange} className="filtro__input-custom" id={`price_${index}`} value={filter} />
                        <label htmlFor={`price_${index}`}>
                            de R${filter.min} até R${filter.max}
                        </label>
                    </li>

                    ))}
                </ul>
            </div>
        </div>
    )};

export default PriceFilters;