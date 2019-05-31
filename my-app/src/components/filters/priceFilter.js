import React from "react"
import './style.scss'

function PriceFilters({ onChange }) {
    const filters = [
        { id: 1, min: 0, max: 50 },
        { id: 2, min: 51, max: 150 },
        { id: 3, min: 151, max: 300 },
        { id: 4, min: 301, max: 500 }
    ]
    const handleChange = filter => () => onChange(filter)

    return (
        <div className="filtro__box">
            <div className="filtro__box-titulo">
                faixa de preços
            </div>

            <div className="filtro__box-opcoes">
                <ul>
                    {filters.map((filter, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                id={`price_${index}`}
                                onChange={handleChange(filter)}
                                className="filtro__input-custom"
                                value={`${filter.min},${filter.max}`}
                            />
                            <label htmlFor={`price_${index}`}>
                                de R${filter.min} até R${filter.max}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PriceFilters
